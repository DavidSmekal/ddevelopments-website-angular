import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { AppCardComponent } from './components/app-card/app-card.component';
import {ChipModule} from "primeng/chip";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";
import {PanelModule} from "primeng/panel";
import { DirtyCharadesPrivacyComponent } from './pages/privacy-policies/dirty-charades-privacy/dirty-charades-privacy.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FamilyCharadesPrivacyComponent } from './pages/privacy-policies/family-charades-privacy/family-charades-privacy.component';
import { SkiTrackrPrivacyComponent } from './pages/privacy-policies/ski-trackr-privacy/ski-trackr-privacy.component';
import { FiveSecondChallengePrivacyComponent } from './pages/privacy-policies/five-second-challenge-privacy/five-second-challenge-privacy.component';
import { PianoSightReadingPrivacyComponent } from './pages/privacy-policies/piano-sight-reading-privacy/piano-sight-reading-privacy.component';
import { DirtyTruthOrDarePrivacyComponent } from './pages/privacy-policies/dirty-truth-or-dare-privacy/dirty-truth-or-dare-privacy.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AppComponent, AppCardComponent, DirtyCharadesPrivacyComponent, HomePageComponent, AboutUsComponent, FamilyCharadesPrivacyComponent, SkiTrackrPrivacyComponent, FiveSecondChallengePrivacyComponent, PianoSightReadingPrivacyComponent, DirtyTruthOrDarePrivacyComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    MenubarModule,
    ChipModule,
    CardModule,
    ImageModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
