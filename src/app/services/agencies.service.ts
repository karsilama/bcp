import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, last, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { finalize } from 'rxjs';
import { ENV_TYPE } from "@bcp/models/env.model";
import { DebounceTime } from "@bcp/decorators/debounce-time.decorator";
import { StorageService } from "./storage.service";
import { Agency } from "@bcp/models/agencies.model";
import { STORAGE_KEYS } from "@bcp/constants/storage.constant";

const URLS = {
	AGENCIES: `${environment.baseUrl}/agencies`
};

@Injectable({
	providedIn: 'root'
})
export class AgenciesService {

	private progress: BehaviorSubject<number> = new BehaviorSubject(0);

	constructor(
		private storage: StorageService,
		private httpClient: HttpClient
	) { }

	public setAgencies(agencies: Agency[]): void {
		this.storage.setItem(STORAGE_KEYS.AGENCIES, agencies);
	}

	public getAgency(lat: string, lng: string): Agency {
		const agencies = this.getAgencies();
		const agency = agencies.find(a => a.lat === Number(lat) && a.lng === Number(lng));
		return agency;
	}

	public getAgencies(): Agency[] {
		return this.storage.getItem(STORAGE_KEYS.AGENCIES);
	}

	public getProgress(): Observable<number> {
		return this.progress.asObservable();
	}

	private setProgress(value: number): void {
		this.progress.next(value);
	}

	public getAll(): Observable<any> {
		this.setProgress(10);
		return this.httpClient.get(URLS.AGENCIES).pipe(
			finalize(() => this.finalizeProgress())
		);
	}

	private finalizeProgress(): void {
		if (environment.type === ENV_TYPE.DEV) {
			this.finalizeDebounced();
			return;
		}
		this.finalize();
	}

	@DebounceTime(1000)
	private finalizeDebounced(): void {
		this.finalize();
	}

	private finalize(): void {
		this.setProgress(100);
	}
}
