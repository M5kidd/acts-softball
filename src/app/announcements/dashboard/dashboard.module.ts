import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

// import { AnnouncementsComponent } from './listPage/announcement.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    // AnnouncementsComponent,
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    SharedModule
  ]
})
export class DashboardModule { }
