import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultLoadingComponent } from './default-loading.component';

fdescribe('DefaultLoadingComponent', () => {
	let component: DefaultLoadingComponent;
	let fixture: ComponentFixture<DefaultLoadingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DefaultLoadingComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(DefaultLoadingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
