import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveSecondChallengePrivacyComponent } from './five-second-challenge-privacy.component';

describe('FiveSecondChallengePrivacyComponent', () => {
  let component: FiveSecondChallengePrivacyComponent;
  let fixture: ComponentFixture<FiveSecondChallengePrivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveSecondChallengePrivacyComponent]
    });
    fixture = TestBed.createComponent(FiveSecondChallengePrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
