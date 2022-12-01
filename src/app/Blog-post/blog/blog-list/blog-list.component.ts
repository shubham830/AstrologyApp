import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  posts:any;

  constructor(private postService: PostService,public router: Router) { }

  ngOnInit() {
    this.onGetPostList();
  }
  countinue(data:any){
    this.router.navigate(['/blog/',data]);
  }
  onGetPostList() {
    this.postService.getPostList().subscribe(
      data => {
        this.posts = data
      },
      error => {
      });
  }
  getImg(des:any){

  }
}