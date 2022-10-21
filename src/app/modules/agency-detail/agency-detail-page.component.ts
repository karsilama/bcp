import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BCP_ROUTES } from '@bcp/constants/routes.constant';
import { Agency } from '@bcp/models/agencies.model';
import { AgenciesService } from '@bcp/services/agencies.service';
import { ToastService } from '@bcp/services/toast.service';

@Component({
	selector: 'bcp-agency-detail-page',
	templateUrl: './agency-detail-page.component.html',
	styleUrls: ['./agency-detail-page.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AgencyDetailPageComponent implements OnInit {

	public form: FormGroup;

	@HostBinding() class = 'bcp-agency-detail-page';

	constructor(
		private toastService: ToastService,
		private agenciesService: AgenciesService,
		private router: Router,
		private fb: FormBuilder,
		private route: ActivatedRoute
	) { }

	public ngOnInit(): void {
		this.createForm();
		this.patchValue();
	}

	private createForm(): void {
		this.form = this.fb.group({
			agencia: ['', Validators.required],
			direccion: ['', Validators.required],
			distrito: ['', Validators.required],
			lat: ['', Validators.required],
			lng: ['', Validators.required]
		});
	}

	public handleBcpButtonClick(): void {

		const { lat, lng } = this.route.snapshot.params;

		let agencies = this.agenciesService.getAgencies();

		agencies = agencies.map(a => {
			if (a.lat === Number(lat) && a.lng === Number(lng)) {
				a.agencia = this.form.value.agencia;
				a.direccion = this.form.value.direccion;
				a.distrito = this.form.value.distrito;
				a.lat = this.form.value.lat;
				a.lng = this.form.value.lng;
			}
			return a;
		});

		this.agenciesService.setAgencies(agencies);
		this.toastService.show('Hecho!', 'La agencia ha sido actualizada.');
		this.router.navigate([BCP_ROUTES.AGENCIES]);
	}

	private patchValue(): void {

		const agency = this.getAgency();
		if (!agency) {
			this.router.navigate([BCP_ROUTES.LOADING]);
			return;
		}

		this.form.patchValue({
			agencia: agency.agencia,
			direccion: agency.direccion,
			distrito: agency.distrito,
			lat: agency.lat,
			lng: agency.lng
		});
	}

	private getAgency(): Agency {
		const { lat, lng } = this.route.snapshot.params;
		return this.agenciesService.getAgency(lat, lng);
	}

}
