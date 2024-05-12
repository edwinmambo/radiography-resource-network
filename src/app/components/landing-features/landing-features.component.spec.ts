import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFeaturesComponent } from './landing-features.component';

describe('LandingFeaturesComponent', () => {
  let component: LandingFeaturesComponent;
  let fixture: ComponentFixture<LandingFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingFeaturesComponent]
    });
    fixture = TestBed.createComponent(LandingFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
