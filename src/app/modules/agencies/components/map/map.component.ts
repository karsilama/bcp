import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'bcp-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

	@Input() options: google.maps.MapOptions;

	@Output() onClose: EventEmitter<null> = new EventEmitter();

	@HostBinding() class = 'bcp-map';

	constructor(
	) { }

	public ngOnInit(): void {
		console.log(this.options)
	}

	public handleCloseBtn(): void {
		this.onClose.emit(null);
	}

}
