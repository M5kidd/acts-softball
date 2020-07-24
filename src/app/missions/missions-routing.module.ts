import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionsComponent } from './missions.component';

const routes: Routes = [
  { path: '', component: MissionsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MissionsRoutingModule { }
