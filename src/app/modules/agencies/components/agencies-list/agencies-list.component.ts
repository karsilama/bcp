import { Component, HostBinding, Input, OnChanges, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BCP_ROUTES } from '@bcp/constants/routes.constant';
import { Agency, IAgencyRow } from '@bcp/models/agencies.model';
import { AgenciesService } from '@bcp/services/agencies.service';
import { GoogleService } from '@bcp/services/google.service';
import { ToastService } from '@bcp/services/toast.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'bcp-agencies-list',
	templateUrl: './agencies-list.component.html',
	styleUrls: ['./agencies-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AgenciesListComponent implements IAgencyRow, OnInit, OnChanges, OnDestroy {
	public apiLoaded: boolean;
	public options: google.maps.MapOptions;

	private destroy$: Subject<boolean> = new Subject();

	@Input() agencies: Agency[];

	@HostBinding() class = 'bcp-agencies-list';

	constructor(
		private toastService: ToastService,
		private agenciesService: AgenciesService,
		private googleService: GoogleService,
		private router: Router,
	) { }

	public ngOnInit(): void {
		this.googleService.getApiLoaded()
			.pipe(takeUntil(this.destroy$))
			.subscribe(isLoaded => this.apiLoaded = isLoaded);
	}

	public ngOnChanges(): void {
		this.agencies.forEach(agency => {
			agency.image = `/assets/images/agencies/${Math.floor(Math.random() * (this.agencies.length - 1 + 1) + 1)}.jpeg`
		})
	}

	public handleFavoriteClick(agency: Agency): void {
		let agencies = this.agenciesService.getAgencies();
		agency.favorite = !agency.favorite;

		agencies = agencies.map(a => {
			if (a.lat === Number(agency.lat) && a.lng === Number(agency.lng)) {
				a.favorite = agency.favorite;
			}
			return a;
		});

		this.agenciesService.setAgencies(agencies);
		this.toastService.show('Hecho!', 'La agencia ha sido actualizada.');
	}

	public handleDirection(agency: Agency): void {
		this.options = {
			center: { lat: agency.lat, lng: agency.lng },
			zoom: 4
		}
	}

	public handleOnClickRow(agency: Agency): void {
		const url = `/${BCP_ROUTES.AGENCY_DETAIL}/${agency.lat}/${agency.lng}`;
		this.router.navigateByUrl(url);
	}

	public closeMap(): void {
		this.options = null;
	}

	public ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}
}
