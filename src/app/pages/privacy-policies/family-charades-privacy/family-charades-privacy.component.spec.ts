import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyCharadesPrivacyComponent } from './family-charades-privacy.component';

describe('FamilyCharadesPrivacyComponent', () => {
  let component: FamilyCharadesPrivacyComponent;
  let fixture: ComponentFixture<FamilyCharadesPrivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyCharadesPrivacyComponent]
    });
    fixture = TestBed.createComponent(FamilyCharadesPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
