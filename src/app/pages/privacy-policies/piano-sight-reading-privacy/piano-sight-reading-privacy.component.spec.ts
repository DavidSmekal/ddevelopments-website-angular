import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoSightReadingPrivacyComponent } from './piano-sight-reading-privacy.component';

describe('PianoSightReadingPrivacyComponent', () => {
  let component: PianoSightReadingPrivacyComponent;
  let fixture: ComponentFixture<PianoSightReadingPrivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PianoSightReadingPrivacyComponent]
    });
    fixture = TestBed.createComponent(PianoSightReadingPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
