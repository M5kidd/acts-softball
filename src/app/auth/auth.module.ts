import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    AngularFireAuthModule,
    AuthRoutingModule,
    // CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    SharedModule
  ],
  exports: [
  ]
})
export class AuthModule { }
