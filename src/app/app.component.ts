import { Component } from '@angular/core';
import { AuthService } from './Services/Auth/auth.service';
import { tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import * as jquery  from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  $: any;

  userId: string ;
  cUser;
  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore,
  ) {
    // (<any>$('.dropdown-trigger')).dropdown();

  }

  ngOnInit() {
    $(document).ready(function(){
      (<any>$('select')).formSelect();
    });
    this.getuser();
  }

  getuser() {
    this.authService.isLoggedIn().pipe(
      tap(user => {
        if (user) {
          this.userId = user.uid;
          this.firestore.collection("Users").doc(user.uid).snapshotChanges().subscribe(res => (this.cUser = res.payload.data()));

        }
      })
    ).subscribe()
  }
  
}
