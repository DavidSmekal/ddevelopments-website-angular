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
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AppComponent, AppCardComponent, PrivacyPolicyComponent],
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
