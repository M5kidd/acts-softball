import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
