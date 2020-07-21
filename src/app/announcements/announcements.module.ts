import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AnnouncementsComponent } from './announcement.component';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AnnouncementsComponent
  ],
  imports: [
    SharedModule
    // CommonModule
  ]
})
export class AnnouncementsModule { }
