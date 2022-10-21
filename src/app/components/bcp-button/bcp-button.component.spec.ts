import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcpButtonComponent } from './bcp-button.component';

describe('BcpButtonComponent', () => {
  let component: BcpButtonComponent;
  let fixture: ComponentFixture<BcpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcpButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
