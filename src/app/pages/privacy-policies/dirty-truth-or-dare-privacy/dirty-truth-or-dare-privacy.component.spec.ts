import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyTruthOrDarePrivacyComponent } from './dirty-truth-or-dare-privacy.component';

describe('DirtyTruthOrDarePrivacyComponent', () => {
  let component: DirtyTruthOrDarePrivacyComponent;
  let fixture: ComponentFixture<DirtyTruthOrDarePrivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirtyTruthOrDarePrivacyComponent]
    });
    fixture = TestBed.createComponent(DirtyTruthOrDarePrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
