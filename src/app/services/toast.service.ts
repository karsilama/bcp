import { Injectable } from '@angular/core';

export interface ToastInfo {
	header: string;
	body: string;
	delay?: number;
}

@Injectable({
	providedIn: 'root'
})
export class ToastService {
	public toasts: ToastInfo[] = [];

	public show(header: string, body: string) {
		this.toasts.push({ header, body });
	}

	public remove(toast: ToastInfo) {
		this.toasts = this.toasts.filter(t => t != toast);
	}
}
