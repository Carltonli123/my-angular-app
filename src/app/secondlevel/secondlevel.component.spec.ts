import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondlevelComponent } from './secondlevel.component';

describe('SecondlevelComponent', () => {
  let component: SecondlevelComponent;
  let fixture: ComponentFixture<SecondlevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondlevelComponent]
    });
    fixture = TestBed.createComponent(SecondlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
