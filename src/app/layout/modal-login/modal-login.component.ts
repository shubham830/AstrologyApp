import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormControl,FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '../LoginApi/login.service';    
import {Register} from '../LoginApi/Register';  
import {Login } from '../LoginApi/login';    
import {Observable} from 'rxjs'; 
@Component({
  selector: 'app-modal-login-signup',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  data = false;    
  UserForm: any;    
  massage:string | undefined; 
  title = 'bootstrap-popup';
  loginForm!: FormGroup;
  model : any={};    
  constructor(private loginService: LoginService ) { }

  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      // userName: new FormControl('', [Validators.required]),

    })
  }
  get emailField(): any {
    return this.loginForm.get('email');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }
  SigninSubmit(login:Login){
    debugger; 
    // this.loginService.Login(login).subscribe(    
    //   ()=>    
    //   {   
      
    //     // this.data = true;    
    //     this.massage = 'Data saved Successfully';    
    //     // this.UserForm.reset();  
    //     console.log( this.massage);  
    //   }); 
    this.loginService.Login(login).subscribe(    
      data => {    
        console.log(data);
        // if(data.Status=="Success")    
        // {       
          
        //   debugger;    
        // }    
        // else{    
            
        // }    
      },    
      error => {    
       
      });    
  
    // Call Api
  }
  onFormSubmit(register:Register)    
  {   
    debugger 
    this.loginService.CreateUser(register).subscribe(    
      ()=>    
      {    
        this.data = true;    
        this.massage = 'Data saved Successfully';    
        this.UserForm.reset();    
      });       
  }    
 
}
