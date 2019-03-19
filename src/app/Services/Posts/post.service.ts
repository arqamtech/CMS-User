import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private firestore: AngularFirestore,
  ) {
  }
  getPost(id) {
    return this.firestore.collection("Posts").doc(id).get();
  }

  getPosts() {
    return this.firestore.collection("Posts").snapshotChanges();
  }
}
