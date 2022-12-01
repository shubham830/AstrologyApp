import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//other modules
// import { EditorModule } from '@tinymce/tinymce-angular';

//rounting
// import { AppRoutingModule } from './app-routing/app-routing.module';

//services
import { PostService } from './services/post.service';

//pipes
// import { SafeHtmlPipe } from './pipes/safe-html.pipe';

//components

import { BlogComponent } from '../Blog-post/blog/blog.component';

import { BlogListComponent } from '../Blog-post/blog/blog-list/blog-list.component';
import { BlogPostComponent } from '../Blog-post/blog/blog-post/blog-post.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { AdminBlogPostComponent } from '../Blog-post/admin/admin-blog/admin-blog-post/admin-blog-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule, FormsModule,AngularEditorModule 
    
  ],
  declarations: [
     BlogComponent, BlogListComponent, BlogPostComponent, AdminBlogComponent, AdminBlogPostComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [BlogListComponent],
  providers: [PostService]
})
export class BlogPostModule { }
