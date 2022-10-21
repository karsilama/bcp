import { Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'bcp-button',
	templateUrl: './bcp-button.component.html',
	styleUrls: ['./bcp-button.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BcpButtonComponent {

	@Input() className: string;
	@Input() iconName?: string;
	@Input() actionText?: string;
	@Input() disabled?: boolean;

	@Output() onClick: EventEmitter<null> = new EventEmitter();

	@HostBinding() class = 'bcp-button';

	public handleClick(): void {
		this.onClick.emit();
	}

}
