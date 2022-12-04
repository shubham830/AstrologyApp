import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PostService } from '../../../services/post.service'
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Content } from 'src/app/Blog-post/services/PostContent';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/Constant/constant';
import { FileToUpload } from 'src/app/profile/service/FileToUpload ';
class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-admin-blog-post',
  templateUrl: './admin-blog-post.component.html',
  styleUrls: ['./admin-blog-post.component.css']
})
export class AdminBlogPostComponent implements OnInit {
  post: Content | undefined;
  id: any;
  fileAsBase64:any;
  filename:any;
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
  imageFile: { link: any; file: any; name: any; } | undefined;
  selectedFile: any;
  imageUrl: any;

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
    debugger
    if (this.contentdata.article_id != 0 && this.contentdata.article_id != undefined) {
      data.article_id = this.contentdata.article_id;
      this.updateArticle(data);
    } else {
      this.createArticle(data);
    }
  }

  getArticlesById(id: any) {
    this.postService.getPostById(id).subscribe(
      data => {
        debugger
        this.contentdata.article_id = data.article_id;
        this.contentdata.title = data.title;
        this.contentdata.description = data.description;
        this.imageUrl = 'data:image/' + data.image_type.substring(1) +';base64,' + data.image_path;
      },
      error => {
      });
  }

  createArticle(data: Content) {
    debugger
    data.fileAsBase64 = this.fileAsBase64;
    data.filename = this.filename;
    this.postService.create(data).subscribe(
      message => {
        if ((message).toString() == Constants.Created) {
          this.toastrService.success((message).toString());
          this.router.navigate(['/admin/']);
        } else {
          this.toastrService.error((message).toString());
        }
      },
      error => {
      });
  }

  updateArticle(data: Content) {

    data.fileAsBase64 = this.fileAsBase64;
    data.filename = this.filename;
    this.postService.updatePost(data).subscribe(
      message => {
        debugger
        if ((message).toString() == Constants.Updated) {
          this.toastrService.success((message).toString());
          this.router.navigate(['/admin/']);
        } else {
          this.toastrService.error((message).toString());
        }
      },
      error => {
      });
  }
  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.fileAsBase64 = event.target.result;
      this.filename = file.name;
      this.imageUrl = event.target.result;
      // this.customerProfileService.uploadImage(file1).subscribe(
      //   (res) => {
      //   },
      //   (err) => {

      //   })
    }
    reader.readAsDataURL(file);

  }
}