import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDetailPageComponent } from './agency-detail-page.component';

describe('AgencyDetailPageComponent', () => {
  let component: AgencyDetailPageComponent;
  let fixture: ComponentFixture<AgencyDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
