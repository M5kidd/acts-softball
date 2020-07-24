import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isAuthenticated = false;

  constructor(private afAuth: AngularFireAuth) { }

  login(authData: AuthData): void {
    this.afAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      console.log('success: ' + result);
      // this.uiService.loadingStateChanged.next(false);
    }
    ).catch(error => {
      console.log('error: ' + error);

      // this.uiService.loadingStateChanged.next(false);
      // this.uiService.showSnackBar(error.message, null, 3000);
    });
  }

  // private authSuccessfully(): boolean {
  //   return this.isAuthenticated;
  // }
}
