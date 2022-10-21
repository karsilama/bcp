import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'bcp-default-loading',
	templateUrl: './default-loading.component.html',
	styleUrls: ['./default-loading.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DefaultLoadingComponent implements OnInit {

	@HostBinding() class = 'bcp-default-loading';

	constructor() { }

	public ngOnInit(): void {
	}

}
