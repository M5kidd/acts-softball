import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
// import { DashboardModule } from './announcements/dashboard/dashboard.module';
import { AnnouncementsComponent } from './announcements/listPage/announcement.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AnnouncementsComponent,
    AppComponent,
    SidenavComponent,
    NavbarComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    // DashboardModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
