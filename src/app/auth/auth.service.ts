import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  isAuthenticated = false;
  public userId: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  initAuthListener(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/dashboard']);
      } else {
        // console.log('my else user ran ' + user);
        this.authChange.next(false);
        // this.router.navigate(['']);
        this.isAuthenticated = false;
      }
    });
  }

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

  logout(): void {
    this.afAuth.signOut();
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }
}
