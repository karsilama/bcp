import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcpHeaderComponent } from './bcp-header.component';

describe('BcpHeaderComponent', () => {
  let component: BcpHeaderComponent;
  let fixture: ComponentFixture<BcpHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcpHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
