import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PostComponent } from './Main/post/post.component';
import { HomeComponent } from './Main/home/home.component';
import { TagComponent } from './Main/tag/tag.component';
import { CategoryComponent } from './Main/category/category.component';
import { PostService } from './Services/Posts/post.service';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { AuthService } from './Services/Auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    CategoryComponent,
    TagComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    PostService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
