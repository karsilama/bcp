import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastService } from '@bcp/services/toast.service';
import { BcpHeaderActionBar, IBcpFilter } from '../bcp-header-action-bar.abstract';

@Component({
	selector: 'bcp-header',
	templateUrl: './bcp-header.component.html',
	styleUrls: ['./bcp-header.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BcpHeaderComponent extends BcpHeaderActionBar implements IBcpFilter, OnInit {

	public showFilterInput: boolean;

	@Input() title: string;
	@Input() navBar: boolean = true;

	@HostBinding() class = 'bcp-header';

	constructor(
		fb: FormBuilder,
	) {
		super(fb);
	}

	public ngOnInit(): void {
		this.initFilterForm();
	}

	public initFilterForm(): void {
		this.initializeForm();
	}

	public handleFilterClick(): void {
		this.toggleFilter();
	}

	public handleSelectFavoriteClick(): void {
		this.toggleSelectedFavorite();
	}

}
