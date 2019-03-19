import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";

import { first, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userId: string = '';

  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
  ) {

    this.getUid();

  }

  signIn = new FormGroup({
    Email: new FormControl(""),
    Pass: new FormControl(""),
  });

  signUp = new FormGroup({
    Name: new FormControl(""),
    Email: new FormControl(""),
    Pass: new FormControl(""),
  });


  isLoggedIn() {
    return this.fireAuth.authState.pipe(first())
  }


  loginM(data) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.signInWithEmailAndPassword(data.Email, data.Pass).then(res => { }, err => reject(err));
    });
  }


  signUpM(data) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.createUserWithEmailAndPassword(data.Email, data.Pass).then(res => {
        this.firestore
          .collection(`Users`).doc(`${res.user.uid}`)
          .set(data)
          .then(res => { }, err => reject(err));
      }, err => reject(err));
    });
  }


  getUid() {
    this.isLoggedIn().pipe(
      tap(user => {
        if (user) {
          this.userId = user.uid;
          return user.uid;
        }
      })
    ).subscribe()
  }



  logout() {
    this.fireAuth.auth.signOut();
  }
}

