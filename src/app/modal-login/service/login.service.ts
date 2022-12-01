import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Register } from "../service/Register";
import { Login } from '../service/login';
import { Email } from './Email';
import { CartItem } from 'src/app/cart/service/cartitem';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url: string;
  token: string | undefined;
  header: any;
  constructor(private http: HttpClient) {
    this.Url = 'https://localhost:44398/Api/login/';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  login(login: Login) {
    debugger;
    const httpOptions = { headers: new HttpHeaders({   'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  
    }) };
    return this.http.post<Login[]>(this.Url + 'UserLogin', login, httpOptions);
  }
  
  createUser(register: Register) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Register[]>(this.Url + 'InsertCustomerDetails/', register, httpOptions)
  }

  emailSendOtp(email: Register) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Email[]>(this.Url + 'emailsend/', email, httpOptions)
  }

  forgetPassword(email: Register) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Email[]>(this.Url + 'resetpassword/', email, httpOptions)
  }
  resetPassword(email: Register) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Register[]>(this.Url + 'updatepassword/', email, httpOptions)
  }
  
  addToCart1(cartItem: CartItem) {
    

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<CartItem[]>(this.Url + 'addToCart/', cartItem, httpOptions)
  }
}
