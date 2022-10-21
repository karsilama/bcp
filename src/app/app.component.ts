import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BCP_ROUTES } from '@bcp/constants/routes.constant';
import { STORAGE_KEYS } from '@bcp/constants/storage.constant';
import { AgenciesService } from '@bcp/services/agencies.service';
import { StorageService } from '@bcp/services/storage.service';
import { takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DebounceTime } from './decorators/debounce-time.decorator';
import { DomManager } from './dom-manager.abstract';
import { IBodyBreakpointClass } from './models/dom';
import { ENV_TYPE } from './models/env.model';
import { IGoogleMaps } from './models/google.model';
import { GoogleService } from './services/google.service';
import { RendererService } from './services/renderer.service';
import { ToastService } from './services/toast.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent extends DomManager implements IGoogleMaps, IBodyBreakpointClass, OnInit, OnDestroy {

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.setBodyBreakpointClass();
	}

	constructor(
		public toastService: ToastService,
		private storage: StorageService,
		private agenciesService: AgenciesService,
		private router: Router,
		googleService: GoogleService,
		rendererService: RendererService
	) {
		super(googleService, rendererService)
	}

	public ngOnInit(): void {
		this.setBodyBreakpointClass();
		this.loadGoogleMapsScript();
		this.getAgencies();
	}

	public loadGoogleMapsScript(): void {
		this.loadGoogleMaps();
	}

	public setBodyBreakpointClass(): void {
		this.setBodyClass();
	}

	private getAgencies(): void {
		const agencies = localStorage.getItem(STORAGE_KEYS.AGENCIES);
		if (agencies && agencies.length) {
			return;
		}
		this.agenciesService.getAll()
			.pipe(takeUntil(this.destroy$))
			.subscribe(agencies => {
				if (agencies) {
					this.agenciesService.setAgencies(agencies);
					this.navigate();
				}
			});
	}

	private navigate(): void {
		// DEBOUNCE TIME ONLY FOR TESTING PURPOSE
		if (environment.type === ENV_TYPE.DEV) {
			this.debounceNavigate();
			return;
		}
		this.continueNavigate();
	}

	@DebounceTime(2000)
	private debounceNavigate(): void {
		this.continueNavigate();
	}

	private continueNavigate(): void {
		this.router.navigate([BCP_ROUTES.AGENCIES]);
	}

}
