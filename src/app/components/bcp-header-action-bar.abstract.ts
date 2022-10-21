import { Directive, EventEmitter, Input, OnDestroy, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";

export interface IBcpFilter {
	initFilterForm(): void;
	handleFilterClick(): void;
	handleSelectFavoriteClick(): void;
}

@Directive()
export abstract class BcpHeaderActionBar implements OnDestroy {

	public form: FormGroup;
	public filter: boolean;

	@Input() allSelected: boolean;

	@Output() onFilter: EventEmitter<string> = new EventEmitter();
	@Output() onSelectAll: EventEmitter<boolean> = new EventEmitter();

	private destroy$: Subject<boolean> = new Subject();

	constructor(
		protected fb: FormBuilder
	) { }

	public toggleFilter(): void {
		this.filter = !this.filter;
		this.evaluateFilter();
	}

	public toggleSelectedFavorite(): void {
		this.allSelected = !this.allSelected;
		this.onSelectAll.emit(this.allSelected);
	}

	private evaluateFilter(): void {
		if (!this.filter) {
			this.onFilter.emit('');
			this.form.patchValue({
				search: ''
			})
		}
	}

	public initializeForm(): void {
		this.form = this.fb.group({
			search: ['']
		});

		this.form.valueChanges
			.pipe(takeUntil(this.destroy$))
			.subscribe(value => this.onFilter.emit(value.search))
	}

	public ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}
}