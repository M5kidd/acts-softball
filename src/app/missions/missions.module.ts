import { NgModule } from '@angular/core';

import { MissionsComponent } from './missions.component';
import { SharedModule } from '../shared/shared.module';
import { MissionsRoutingModule } from './missions-routing.module';

@NgModule({
  declarations: [MissionsComponent],
  imports: [
    SharedModule,
    MissionsRoutingModule
  ]
})
export class MissionsModule { }
