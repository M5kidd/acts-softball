import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnouncementsComponent } from './announcements/listPage/announcement.component';
// import { MissionsComponent } from './missions/missions.component';

const routes: Routes = [
  { path: '', component: AnnouncementsComponent },
  { path: 'missions', loadChildren: () => import('./missions/missions.module').then(m => m.MissionsModule) },
  { path: 'dashboard', loadChildren: () => import('./announcements/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'login/authentication/required/afdsiuhkbvia', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
