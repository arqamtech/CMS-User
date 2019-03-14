import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Main/home/home.component';
import { PostComponent } from './Main/post/post.component';
import { TagComponent } from './Main/tag/tag.component';
import { CategoryComponent } from './Main/category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'tag/:id', component: TagComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
