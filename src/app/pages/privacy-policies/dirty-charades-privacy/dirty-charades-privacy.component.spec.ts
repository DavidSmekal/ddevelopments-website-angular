import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyCharadesPrivacyComponent } from './dirty-charades-privacy.component';

describe('DirtyCharadesPrivacyComponent', () => {
  let component: DirtyCharadesPrivacyComponent;
  let fixture: ComponentFixture<DirtyCharadesPrivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirtyCharadesPrivacyComponent]
    });
    fixture = TestBed.createComponent(DirtyCharadesPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
