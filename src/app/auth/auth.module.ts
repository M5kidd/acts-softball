import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

// import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    AngularFireAuthModule,
    AuthRoutingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    // CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule
  ],
  exports: [
  ]
})
export class AuthModule { }
