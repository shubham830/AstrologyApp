import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalService } from 'src/app/localStorage/local.service';
import { LoginService } from 'src/app/modal-login/service/login.service';
import { Register } from 'src/app/modal-login/service/Register';
import Swal from 'sweetalert2';
import { LoginComponent } from '../login/login.component';
import { Email } from '../service/Email';

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
  massage: string | undefined;
  title = 'bootstrap-popup';
  registerForm!: FormGroup;
  model: any = {};
  data: boolean | undefined;
  
  display: any;
  isRegisterItem = true;
  loading = false;
  isBtnOtpResend = false;
  email!:Register ;

  @Output() isHeaderTitle: EventEmitter<string> = new EventEmitter();
  
  
  constructor(private loginService: LoginService,
    private localStore: LocalService,
    private toastrService: ToastrService, public router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      userFirstName: new FormControl('', [Validators.required]),
      userLastName: new FormControl('', [Validators.required]),
      otp: new FormControl('', [Validators.required]),
    })
  }

  get emailField(): any {
    return this.registerForm.get('email');
  }
  get passwordField(): any {
    return this.registerForm.get('password');
  }
  get userFirstNameField(): any {
    return this.registerForm.get('userFirstName');
  }
  get userLastNameField(): any {
    return this.registerForm.get('userLastName');
  }
  get otpField(): any {
    return this.registerForm.get('otp');
  }

  ngOnInit(): void {
    
  }
 
  onFormSubmit1(register: Register) {
    this.loading = true;
    let email = this.registerForm.controls['email'].value
    console.log(email);
    this.loginService.createUser(register).subscribe(
      (massage) => {
        this.loading = false;
        this.toastrService.success( massage.toString());
        // Swal.fire(massage.toString());
        this.data = true;
        this.registerForm.reset();
        window.location.reload();
        this.isHeaderTitle.emit("close");
      });

  }

  continueBtn(register: Register) {
    this.loading = true;
    this.localStore.saveData('Emailid', JSON.stringify(register));
    this.loginService.emailSendOtp(register).subscribe(
      (massage) => {
        this.loading = false;
        if (massage.toString() == "Your OTP has been send successfully to your e-mail address") {
          this.toastrService.success(massage.toString());
          this.isHeaderTitle.emit("OTP Verification");
          this.isRegisterItem = false;
          this.isBtnOtpVisible = true;
          this.isotpInputBoxVisible = true;
          this.isBtnContinueVisible = false;
          this.timer(2);
        } else {
          this.toastrService.error(massage.toString());
          this.registerForm.reset();
          
        }
      });
  }
  timer(minute: number) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        this.isBtnOtpVisible = false;
        this.isBtnOtpResend = true;
        clearInterval(timer);
      }
    }, 1000);
  }
  btnResend() {
    this.loading = true;
    this.email = JSON.parse(this.localStore.getData('Emailid'))
    this.loginService.emailSendOtp(this.email).subscribe(
      (massage) => {
        this.loading = false;
        this.isBtnOtpVisible = true;
        this.isBtnOtpResend = false;
        this.localStore.removeData("Emailid")
        this.toastrService.success( massage.toString());
        if (massage.toString() == "Your OTP has been send successfully to your e-mail address") {
          this.isHeaderTitle.emit("OTP Verification");
          this.isRegisterItem = false;
          this.isBtnOtpVisible = true;
          this.isotpInputBoxVisible = true;
          this.isBtnContinueVisible = false;
          this.timer(2);
        }
      });
  }
}
