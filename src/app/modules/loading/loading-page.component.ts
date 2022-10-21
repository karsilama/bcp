import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AgenciesService } from '@bcp/services/agencies.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'bcp-loading-page',
	templateUrl: './loading-page.component.html',
	styleUrls: ['./loading-page.component.scss'],
	providers: [NgbProgressbarConfig],
	encapsulation: ViewEncapsulation.None
})
export class LoadingPageComponent implements OnInit, OnDestroy {
	public progressBarValue: number = 0;

	private destroy$: Subject<boolean> = new Subject();

	@HostBinding() class = 'bcp-loading-page';

	constructor(
		private config: NgbProgressbarConfig,
		private agenciesService: AgenciesService
	) {
		config.max = 100;
		config.striped = true;
		config.animated = true;
		config.type = 'dark';
		config.height = '10px';
		config.showValue = false;
	}

	public ngOnInit(): void {
		this.agenciesService.getProgress()
			.pipe(takeUntil(this.destroy$))
			.subscribe(value => this.progressBarValue = value);
	}

	public ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}
}


