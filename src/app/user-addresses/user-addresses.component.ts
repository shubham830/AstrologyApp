import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { LocalService } from '../localStorage/local.service';
import { Login } from '../modal-login/service/login';
import { UserAddresses } from './user-address';
import { UserAddressService } from './user-address-service';
import { UserAddressesID } from './user_id';

@Component({
  selector: 'app-user-addresses',
  templateUrl: './user-addresses.component.html',
  styleUrls: ['./user-addresses.component.css']
})
export class UserAddressesComponent implements OnInit {
  addAddressForm!: FormGroup;
  popupHeader:string | undefined;
  isAddNewAddress:boolean = false;
  isDeleteAddress:boolean = false;
  isEditAddress:boolean = false;
  isgetAddress:any= []  ;
  @ViewChild('btnclose') btnclose! : ElementRef ;
  @ViewChild('popup') popup! : ElementRef ;
  @ViewChild('viewmodal') viewmodal! : ElementRef ;
  constructor(private userAddressService:UserAddressService,private toastrService: ToastrService,
    private localStore: LocalService) {
    this.addAddressForm = new FormGroup({
      full_name: new FormControl('', [Validators.required]),
      phone_no: new FormControl('', [Validators.required]),
      pinCode: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      address_line1: new FormControl('', [Validators.required]),
      address_line2: new FormControl('', [Validators.required]),
    })
   }

  get fullnameField(): any {
    return this.addAddressForm.get('full_name');
  }
  get phoneNoField(): any {
    return this.addAddressForm.get('phone_no');
  }
  get pinCodeField(): any {
    return this.addAddressForm.get('pinCode');
  }
  get stateField(): any {
    return this.addAddressForm.get('state');
  }
  get cityField(): any {
    return this.addAddressForm.get('city');
  }
  get addressLine1Field(): any {
    return this.addAddressForm.get('address_line1');
  }
  get addressLine2Field(): any {
    return this.addAddressForm.get('address_line2');
  }

  ngOnInit(): void {
    
     this.getAddress();
      
    }
  

  saveAddress(data:UserAddresses){
    debugger
    let login = JSON.parse(this.localStore.getData('login'));
    let id = login.user_id;
    data.user_id = id;
    this.userAddressService.saveAddress(data).subscribe(
      (massage) => {
        this.toastrService.success( massage.toString());
        // Swal.fire(massage.toString());
      });
  }
  getAddress(){
    debugger
    
    let login = JSON.parse(this.localStore.getData('login'));
    
     
  
      this.userAddressService.getAddress(login.user_id).subscribe(
        data => {
          this.isgetAddress = data;
          
        },
        error => {
        });
  }

  viewModal(data:string){
    this.popupHeader = data;
    if(data == 'Address'){
      this.isAddNewAddress = true;
      this.isDeleteAddress = false;
    } else if(data == 'Edit Address'){
      this.isAddNewAddress = true;
      this.isDeleteAddress = false;
    }else if(data == 'Delete Address'){
      this.isAddNewAddress = false;
      this.isDeleteAddress = true;
    }
    else {
      
      this.isAddNewAddress = false;
    }
    this.popup?.nativeElement.classList.toggle("show");
  }
  
  btnClose(){
    this.btnclose.nativeElement.onclick(this.viewmodal.nativeElement.click());
  }
}
