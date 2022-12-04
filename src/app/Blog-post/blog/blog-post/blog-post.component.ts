import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { PostService } from '../../services/post.service'
import { Content } from '../../services/PostContent';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  post:Content | undefined;
  id:any;
  count:any = 0;
  imageUrl:any;
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit() {
    debugger
    let articleId = this.route.snapshot.params['ArticleId']
    if (articleId != "0") {
      this.getArticlesById(articleId)
    }
    const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon");
  this.count = document.querySelector("#count")!;

let clicked = false;


likeBtn!.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon!.innerHTML = `<i class="fa fa-thumbs-up"></i>`;
    this.count.textContent ++;
  } else {
    clicked = false;
    likeIcon!.innerHTML = `<i class="fa fa-thumbs-up"></i>`;
    this.count.textContent--;
  }
});

  }
  getArticlesById(articleId:any) {
    this.postService.getPostById(articleId).subscribe(
      data => {
        this.post = data
        this.imageUrl = 'data:image/' + data.image_type.substring(1) +';base64,' + data.image_path;
      },
      error => {
      });
  }
}