import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GOOGLE_MAP_URL } from '@bcp/constants/google.constant';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GoogleService {

	private apiLoaded: BehaviorSubject<boolean> = new BehaviorSubject(null);

	constructor(
		private httpClient: HttpClient
	) { }

	public getApiLoaded(): Observable<boolean> {
		return this.apiLoaded.asObservable();
	}

	public setApiLoaded(loaded: boolean): void {
		this.apiLoaded.next(loaded);
	}

	public loadScript(): Observable<Object> {
		console.log(GOOGLE_MAP_URL)
		return this.httpClient.jsonp(GOOGLE_MAP_URL, 'callback')
	}

}
