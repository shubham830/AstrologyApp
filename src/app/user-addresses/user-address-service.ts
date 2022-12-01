import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/modal-login/service/login';
import { Register } from 'src/app/modal-login/service/Register';
import { UserAddresses } from './user-address';
import { UserAddressesID } from './user_id';


@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
  Url: string ;
  token: string | undefined;
  header: any;

  constructor(private http: HttpClient) {
    this.Url = 'https://localhost:44398/Api/login/';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  saveAddress(userAddresses: UserAddresses) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<UserAddresses[]>(this.Url + 'InsertUserAddresses/', userAddresses, httpOptions)
  }
  getAddress(user_id:any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<any>(this.Url + 'getAddress/', user_id)
  }
//   uploadImage(theFile: FileToUpload): Observable<any> {
//     // const formData = new FormData();
//     //  formData.append('image',image, image.name);
//     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
//     return this.http.post<FileToUpload>(this.Url + 'uploadImge/', theFile, httpOptions);
//   }

//   getImage(register: any) {
//     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
//     return this.http.post<Accountdetails[]>(this.Url + 'GetFiles/', register, httpOptions)
//   }
}
