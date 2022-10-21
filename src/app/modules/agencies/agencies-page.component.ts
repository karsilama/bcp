import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Agency } from '@bcp/models/agencies.model';
import { AgenciesService } from '@bcp/services/agencies.service';
import { ToastService } from '@bcp/services/toast.service';

@Component({
	selector: 'bcp-agencies-page',
	templateUrl: './agencies-page.component.html',
	styleUrls: ['./agencies-page.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AgenciesPageComponent implements OnInit {

	public agencies: Agency[] = [];

	@HostBinding() class = 'bcp-agencies-page';

	constructor(
		private toast: ToastService,
		private agenciesService: AgenciesService,
	) { }

	public ngOnInit(): void {
		this.agencies = this.agenciesService.getAgencies();
	}

	public handleBcpHeaderFilter(text: string): void {
		const source = this.agenciesService.getAgencies();
		if (text.length > 3) {
			const regexp = new RegExp(`${text}*`, 'gi');
			this.agencies = source.filter(a => {
				return regexp.test(a.agencia)
			});
			return;
		}
		this.agencies = source;
	}

	public handleBcpHeaderSelect(selected: boolean): void {
		this.agencies.forEach(a => a.favorite = selected);
		this.agenciesService.setAgencies(this.agencies);
		this.toast.show('Hecho!', 'Las agencias han sido actualizadas.');
	}

	public handleBcpMoreBtn(): void {
		console.log('Increase pagination goes here..')

		// Fake pagination
		this.agencies.push(this.agencies[this.agencies.length - 1]);
	}

	public get areAllSelected() {
		return this.agencies.length === this.agencies.filter(a => a.favorite).length
	}

}
