import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/modal-login/service/login';
import { Register } from 'src/app/modal-login/service/Register';
import { Accountdetails } from './customer-details';
import { FileToUpload } from './FileToUpload ';

@Injectable({
  providedIn: 'root'
})
export class CustomerProfileService {
  Url: string | undefined;
  token: string | undefined;
  header: any;

  constructor(private http: HttpClient) {
    this.Url = 'https://localhost:44398/Api/login/';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  accountDetailsUpdate(register: Accountdetails) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Accountdetails[]>(this.Url + 'InsertCustomerDetails/', register, httpOptions)
  }

  uploadImage(theFile: FileToUpload): Observable<any> {
    // const formData = new FormData();
    //  formData.append('image',image, image.name);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<FileToUpload>(this.Url + 'uploadImge/', theFile, httpOptions);
  }

  getImage(register: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Accountdetails[]>(this.Url + 'GetFiles/', register, httpOptions)
  }
}
