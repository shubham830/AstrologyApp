import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http'; 
import { from, Observable } from 'rxjs';  
import { Register } from "../LoginApi/Register";  
import {Login } from '../LoginApi/login';  

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url :string;  
  token : string | undefined;  
  header : any;  
  constructor(private http : HttpClient) {
    this.Url = 'https://localhost:44317/Api/login/';  

    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
   }
   Login(login :Login){  
    debugger;  
     
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };   
   return this.http.post<Login[]>(this.Url+'UserLogin',login,httpOptions);  
  }  
   CreateUser(register:Register)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Register[]>(this.Url + 'InsertCustomerDetails/', register, httpOptions)  
   }  
}
