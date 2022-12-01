import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/Constant/constant';

import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  posts: any;
  constructor(private postService: PostService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.onGetPostList();
  }

  onDelete(id: any) {
    if (confirm("Are you sure?")) {
      this.postService.deletePost(id).subscribe(
        message => {
          if ((message).toString() == Constants.Deleted) {
            this.toastrService.success((message).toString());
            this.onGetPostList();
          } else {
            this.toastrService.success((message).toString());
          }
        },
        error => {
        });
    }
  }

  onEdit(id: number) {
    this.router.navigate(['/admin/blog', id]);
  }

  onGetPostList() {
    this.postService.getPostList().subscribe(
      data => {
        this.posts = data
      },
      error => {
      });
  }
}