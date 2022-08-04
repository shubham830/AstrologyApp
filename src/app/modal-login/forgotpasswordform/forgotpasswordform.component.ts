import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';
import { Register } from '../service/Register';

@Component({
  selector: 'app-forgotpasswordform',
  templateUrl: './forgotpasswordform.component.html',
  styleUrls: ['./forgotpasswordform.component.css']
})
export class ForgotpasswordformComponent implements OnInit {
  forgotpasswordForm!: FormGroup;
  data!: boolean;
  closebutton: any;
  constructor(private loginService: LoginService) { 
    this.forgotpasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }
  get emailField(): any {
    return this.forgotpasswordForm.get('email');
  }
  ngOnInit(): void {
  }
  onFormSubmit(register:Register) {
    debugger
    let email= this.forgotpasswordForm.controls['email'].value
    console.log(email);
    this.loginService.forgetPassword(register).subscribe(
      (massage)=> {
        Swal.fire(massage.toString());
        this.data = true;
        this.closebutton.nativeElement.click();
      });

  }
}
