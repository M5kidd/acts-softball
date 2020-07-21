import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { AnnouncementsModule } from './announcements/announcements.module';
import { MissionsModule } from './missions/missions.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    AnnouncementsModule,
    MissionsModule,
    AboutModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
