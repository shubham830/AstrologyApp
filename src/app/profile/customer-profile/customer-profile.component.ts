import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accountdetails } from '../service/customer-details';
import { CustomerProfileService } from '../service/customer-profile.service';
import { FileToUpload } from '../service/FileToUpload ';
class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  name = 'Angular';
  fileToUpload: any;
  user: any = [];
  accountDetailsForm!: FormGroup;
  selectedFile: ImageSnippet | undefined;
  imageUrl = '~/../assets/user-profile-default.png'; http: any;

  constructor(private customerProfileService: CustomerProfileService, public router: Router) {
    let user = this.router.getCurrentNavigation()?.extras.state;
    this.user = user
  }

  ngOnInit(): void {
    this.accountDetailsForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      fullname: new FormControl('', [Validators.required,]),
      phonenumber: new FormControl('', [Validators.required,]),
      address: new FormControl('', [Validators.required,]),
    })

    this.customerProfileService.getImage(this.user).subscribe(
      data => {
        console.log(data);
        this.imageUrl = 'data:image/jpg;base64,' + data;
      },
      error => {

      });

  }


  handleFileInput(event: Event) {
    debugger
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    let file1 = new FileToUpload();
    // Set File Information
    file1.fileName = file.name;
    file1.fileSize = file.size;
    file1.fileType = file.type;
    file1.lastModifiedTime = file.lastModified;
    file1.userId = this.user.userid;
    file1.userName = this.user.username;
    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      file1.fileAsBase64 = event.target.result;
      this.imageUrl = event.target.result;
      this.customerProfileService.uploadImage(file1).subscribe(
        (res) => {
        },
        (err) => {

        })
    }
    reader.readAsDataURL(file);

  }

  get emailField(): any {
    return this.accountDetailsForm.get('email');
  }
  get fullnameField(): any {
    return this.accountDetailsForm.get('fullname');
  }
  get phonenumberField(): any {
    return this.accountDetailsForm.get('phonenumber');
  }
  get addressField(): any {
    return this.accountDetailsForm.get('address');
  }

  accountDetailsUpdate(accountdetails: Accountdetails) {
    this.customerProfileService.accountDetailsUpdate(accountdetails).subscribe(
      data => {
        console.log(data);
      },
      error => {

      });
  }
}
