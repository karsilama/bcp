import { Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'bcp-more-btn',
	templateUrl: './more-btn.component.html',
	styleUrls: ['./more-btn.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MoreBtnComponent {

	@Output() onClick: EventEmitter<null> = new EventEmitter();

	@HostBinding() class = 'bcp-more-btn';

	constructor() { }

	public handleBcpButtonClick(): void {
		this.onClick.emit(null);
	}

}
