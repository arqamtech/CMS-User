import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/Posts/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private postService: PostService,

  ) {
    this.getPosts();

  }

  ngOnInit() {
  }
  posts;

  getPosts = () => this.postService.getPosts().subscribe(res => (this.posts = res));
  preview = (id) => window.open(`post/${id}`)

}
