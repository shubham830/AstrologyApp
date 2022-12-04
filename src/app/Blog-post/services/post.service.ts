import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from './PostContent';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  Url: string;
  token: string | undefined;
  header: any;
 
  

  constructor(private http: HttpClient) {
    this.Url = 'https://localhost:44398/api/article/';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
    // localStorage.removeItem('posts');
  }

  getPostList() {
    return this.http.get<any>(this.Url + 'getArticles/')
  }

  getPostById(id: any) {
    return this.http.get<any>(this.Url + 'getArticlesById/' + id)
  }

  create(post:Content) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Content[]>(this.Url + 'CreateArticle', post, httpOptions);
  }

  deletePost(id: string) {
    return this.http.delete<any>((this.Url + 'DeleteArticle/' + id));
  }

publishPost(id:any){
  
  return this.http.get<any>(this.Url + 'PublishArticle/' + id)
}
unPublishPost(id:any){
  return this.http.get<any>(this.Url + 'UnPublishArticle/' + id)
}
  updatePost(post:Content) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Content[]>(this.Url + 'UpdateArticle', post, httpOptions);
    }

  //   this.posts[index] = post;

  //   this.saveInDB(this.posts);
  //   return true;
  // }

  

  // saveInDB(posts: { id: string; title: string; url: string; body: string; }[]) {
  //   localStorage.setItem("posts", JSON.stringify(posts))
  // }


}