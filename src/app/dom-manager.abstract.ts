import { Directive, OnDestroy } from "@angular/core";
import { catchError, of, Subject, takeUntil } from "rxjs";
import { GoogleService } from "./services/google.service";
import { RendererService } from "./services/renderer.service";

@Directive()
export abstract class DomManager implements OnDestroy {

	protected destroy$: Subject<boolean> = new Subject();

	constructor(
		protected googleService: GoogleService,
		protected rendererService: RendererService
	) { }

	public setBodyClass(): void {
		this.rendererService.setBodyClass();
	}

	public loadGoogleMaps(): void {
		this.googleService.loadScript()
			.pipe(
				takeUntil(this.destroy$),
				catchError(() => {
					this.googleService.setApiLoaded(false);
					return of(false)
				}),
			).subscribe(() => this.googleService.setApiLoaded(true));
	}

	public ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}
}