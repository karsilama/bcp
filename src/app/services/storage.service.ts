import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '@bcp/constants/storage.constant';
import { Agency } from '@bcp/models/agencies.model';

@Injectable({
	providedIn: 'root'
})
export class StorageService {

	public setItem(key: string, value: any): void {
		localStorage.setItem(key, JSON.stringify(value))
	}

	public getItem(key: string = 'asd'): any {
		if (!key) {
			return;
		}
		const content = localStorage.getItem(key);
		if (!content) {
			return;
		}
		return JSON.parse(content)
	}
}
