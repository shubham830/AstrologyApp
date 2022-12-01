import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PostService } from '../../../services/post.service'
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Content } from 'src/app/Blog-post/services/PostContent';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/Constant/constant';
@Component({
  selector: 'app-admin-blog-post',
  templateUrl: './admin-blog-post.component.html',
  styleUrls: ['./admin-blog-post.component.css']
})
export class AdminBlogPostComponent implements OnInit {
  post: any;
  id: any;


  htmlContent = '';
  postForm!: FormGroup;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',

  };

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService
    , private toastrService: ToastrService) { }

  contentdata = new Content();

  ngOnInit() {
    let articleId = this.route.snapshot.params['ArticleId']

    if (articleId != "0") {
      this.getArticlesById(articleId)
    }
    this.postForm = new FormGroup({
      Title: new FormControl('', [Validators.required]),
      Description: new FormControl()
    })

  }

  get titleField(): any {
    return this.postForm.get('Title');
  }


  onSubmit(data: Content) {
    if (this.contentdata.ArticleId != 0 && this.contentdata.ArticleId != undefined) {
      data.ArticleId = this.contentdata.ArticleId;
      this.updateArticle(data);
    } else {
      this.createArticle(data);
    }
  }

  getArticlesById(id: any) {
    this.postService.getPostById(id).subscribe(
      data => {
        this.contentdata.ArticleId = data.ArticleId;
        this.contentdata.Title = data.Title;
        this.contentdata.Description = data.Description;
      },
      error => {
      });
  }

  createArticle(data: Content) {
    this.postService.create(data).subscribe(
      message => {
        if ((message).toString() == Constants.Created) {
          this.toastrService.success((message).toString());
        } else {
          this.toastrService.success((message).toString());
        }
      },
      error => {
      });
  }

  updateArticle(data: Content) {
    this.postService.updatePost(data).subscribe(
      message => {
        debugger
        if ((message).toString() == Constants.Updated) {
          this.toastrService.success((message).toString());
        } else {
          this.toastrService.success((message).toString());
        }
      },
      error => {
      });
  }
}