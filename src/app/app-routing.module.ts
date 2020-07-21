import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnouncementsComponent } from './announcements/announcement.component';
import { MissionsComponent } from './missions/missions.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: AnnouncementsComponent },
  { path: 'missions', component: MissionsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
