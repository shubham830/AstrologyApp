import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modal-login/service/login.service';
import { Register } from 'src/app/modal-login/service/Register';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isBtnContinueVisible = true;
  isBtnOtpVisible = false;
  isotpInputBoxVisible = false;
  UserForm: any;
  massage:string | undefined;
  title = 'bootstrap-popup';
  registerForm!: FormGroup;
  model : any={};
  data: boolean | undefined;
  closebutton: any;

  constructor(private loginService: LoginService, public router:Router) { 
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      otp: new FormControl('', [Validators.required]),
    })
  }

  get emailField(): any {
    return this.registerForm.get('email');
  }
  get passwordField(): any {
    return this.registerForm.get('password');
  }
  get userNameField(): any {
    return this.registerForm.get('userName');
  }
  get otpField(): any {
    return this.registerForm.get('otp');
  }

  ngOnInit(): void {
  }

  onFormSubmit1(register:Register) {
    debugger
    let email= this.registerForm.controls['email'].value
    console.log(email);
    this.loginService.createUser(register).subscribe(
      (massage)=> {
        Swal.fire(massage.toString());
        this.data = true;
        this.closebutton.nativeElement.click();
      });

  }

  continueBtn(register:Register) {
    debugger
    this.loginService.emailSendOtp(register).subscribe(
      (massage)=> {
        console.log(massage);
        Swal.fire(massage.toString());
        if(massage.toString() == "your otp has been send successfully to your e-mail address") {
          this.isBtnOtpVisible = true;
          this.isotpInputBoxVisible = true;
          this.isBtnContinueVisible = false;
        }
      });
  }
}
