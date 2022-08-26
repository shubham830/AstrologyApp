import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';
import { Register } from '../service/Register';

function passwordMatchValidator(password: string): Validators {
  return (control: FormControl) => {
    console.log(control)
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(password)?.value === control.value ? null : { mismatch: true };
  };
}
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetPassword!: FormGroup;
  custid!: number;
  loading:boolean = false
  constructor(private fb: FormBuilder, private loginService: LoginService, 
    private route: ActivatedRoute,
    private toastrService: ToastrService) {
    this.resetPassword = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12)
      ]],
      confirmpassword: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
        passwordMatchValidator('password')
      ]]
    });
  }
  get passwordField(): any {
    return this.resetPassword.get('password');
  }
  get confirmpasswordField(): any {
    return this.resetPassword.get('confirmpassword');
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.custid = 1;
      console.log("id", this.custid)
    });
  }


  onFormSubmit(register: Register) {
    register.Id = this.custid;
    this.loading = true;
    this.loginService.resetPassword(register).subscribe(
      (massage) => {
        this.loading = false;
        this.toastrService.success(massage.toString());
       
      });
  }
}
