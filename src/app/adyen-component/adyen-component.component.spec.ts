import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdyenComponentComponent } from './adyen-component.component';

describe('AdyenComponentComponent', () => {
  let component: AdyenComponentComponent;
  let fixture: ComponentFixture<AdyenComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdyenComponentComponent]
    });
    fixture = TestBed.createComponent(AdyenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
