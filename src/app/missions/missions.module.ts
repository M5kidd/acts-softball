import { NgModule } from '@angular/core';
import { MissionsComponent } from './missions.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MissionsComponent],
  imports: [
    SharedModule
  ]
})
export class MissionsModule { }
