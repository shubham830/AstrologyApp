import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonModule} from "@angular/common";
import { PostService } from '../../services/post.service'

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  
})
export class BlogListComponent implements OnInit {
 
  posts:any;
  
  constructor(private postService: PostService,public router: Router,private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.onGetPostList();
  }
  countinue(data:any){
    this.router.navigate(['/blog/',data]);
  }
  onGetPostList() {
    debugger
    this.postService.getPostList().subscribe(
      data => {
        this.posts = data.filter((x: { publish_status: number; })=>x.publish_status == 1)
       
      },
      error => {
      });
  }
  getImage(img:any,image_type:any){
    debugger
    let imgsrc = 'data:image/' + image_type.substring(1) +';base64,' + img
       return imgsrc;
  }
}