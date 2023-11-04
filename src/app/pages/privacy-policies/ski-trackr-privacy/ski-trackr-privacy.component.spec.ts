import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiTrackrPrivacyComponent } from './ski-trackr-privacy.component';

describe('SkiTrackrPrivacyComponent', () => {
  let component: SkiTrackrPrivacyComponent;
  let fixture: ComponentFixture<SkiTrackrPrivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkiTrackrPrivacyComponent]
    });
    fixture = TestBed.createComponent(SkiTrackrPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
