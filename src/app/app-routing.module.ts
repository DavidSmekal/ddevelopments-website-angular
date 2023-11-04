import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DirtyCharadesPrivacyComponent
} from "./pages/privacy-policies/dirty-charades-privacy/dirty-charades-privacy.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {
  FamilyCharadesPrivacyComponent
} from "./pages/privacy-policies/family-charades-privacy/family-charades-privacy.component";
import {
  FiveSecondChallengePrivacyComponent
} from "./pages/privacy-policies/five-second-challenge-privacy/five-second-challenge-privacy.component";
import {
  PianoSightReadingPrivacyComponent
} from "./pages/privacy-policies/piano-sight-reading-privacy/piano-sight-reading-privacy.component";
import {SkiTrackrPrivacyComponent} from "./pages/privacy-policies/ski-trackr-privacy/ski-trackr-privacy.component";
import {
  DirtyTruthOrDarePrivacyComponent
} from "./pages/privacy-policies/dirty-truth-or-dare-privacy/dirty-truth-or-dare-privacy.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutUsComponent },
  // my apps are already hardcoded to use .html
  { path: 'dirty-charades-privacy.html', component: DirtyCharadesPrivacyComponent },
  { path: 'dirty-charades-privacy', component: DirtyCharadesPrivacyComponent },
  { path: 'family-charades-privacy.html', component: FamilyCharadesPrivacyComponent },
  { path: 'family-charades-privacy', component: FamilyCharadesPrivacyComponent },
  { path: 'five-second-challenge-privacy.html', component: FiveSecondChallengePrivacyComponent },
  { path: 'five-second-challenge-privacy', component: FiveSecondChallengePrivacyComponent },
  { path: 'piano-sight-reading-privacy.html', component: PianoSightReadingPrivacyComponent },
  { path: 'piano-sight-reading-privacy', component: PianoSightReadingPrivacyComponent },
  { path: 'ski-trackr-privacy.html', component: SkiTrackrPrivacyComponent },
  { path: 'ski-trackr-privacy', component: SkiTrackrPrivacyComponent },
  { path: 'dirty-truth-or-dare-privacy.html', component: DirtyTruthOrDarePrivacyComponent },
  { path: 'dirty-truth-or-dare-privacy', component: DirtyTruthOrDarePrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
