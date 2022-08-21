import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Register } from '../service/Register';
import { Login } from '../service/login';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LocalService } from 'src/app/localStorage/local.service';
import { CustomerProfileService } from 'src/app/profile/service/customer-profile.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('closebutton') closebutton: any;
  @Output() userDetails = new EventEmitter<any>();
  data = false;
  invalidPassword: string | undefined
  UserForm: any;
  massage: string | undefined;
  title = 'bootstrap-popup';
  loginForm!: FormGroup;
  model: any = {};
  isRegister: boolean = false;
  loginhide: boolean = true;
  modalFooterMessageDisplay: string = " Don't have account ?";
  modalFooterBtnMessage: string = "Register Now";
  btnForgot: boolean = true;
  isheadername: string = "Log In";
  isForgot: boolean = false;
  constructor(private loginService: LoginService, public router: Router,private localStore: LocalService, private customerProfileService: CustomerProfileService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  get emailField(): any {
    return this.loginForm.get('email');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }
  get userNameField(): any {
    return this.loginForm.get('userName');
  }

  onFormSubmit(login: Login) {
    debugger;
    this.loginService.login(login).subscribe(
      data => {
        console.log(data);
        if (data == null) {
          this.invalidPassword = 'Invalid Password try again';
        } else {
          this.router.navigate(['/product']);
          this.userDetails.emit(data);
          this.localStore.saveData('login', (data).toString());
          console.log('decrpted data ', this.localStore.getData('login'));
          this.closebutton.nativeElement.click();
          this.invalidPassword = '';
          this.loginForm.reset();
        }
      },
      error => {
      });
  }

  register(message: string) {
    if (message == "Login") {
      this.isheadername = "Log In"
      this.isRegister = false;
      this.loginhide = true;
      this.modalFooterMessageDisplay = " Don't have account ?";
      this.modalFooterBtnMessage = "Register Now";
      this.btnForgot = true;
      this.isForgot = false;
    }
    else {
      this.isheadername = "Register"
      this.isRegister = true;
      this.loginhide = false;
      this.modalFooterMessageDisplay = "Already have account ?";
      this.modalFooterBtnMessage = "Login";
      this.btnForgot = false;
    }

  }
  onheader(register: any) {
    
    register.class = "sticky-top"
    this.userDetails.emit(register.class)
  }
  ismodalclose(register: any) {
    this.userDetails.emit("")
  }
  onforgotpassword(data: any) {
    this.isheadername = "Forgot you password ?"
    this.isRegister = false;
    this.loginhide = false;
    this.isForgot = true;
    this.btnForgot = false;
    this.modalFooterMessageDisplay = "Already have account ?";
    this.modalFooterBtnMessage = "Login";
  }
  receiveHeaderTitle(data:any) {
    this.isheadername = data;
    console.log(data);
    }
}
