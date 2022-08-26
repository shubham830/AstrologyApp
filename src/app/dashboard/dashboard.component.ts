import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationExtras, NavigationStart, Router } from '@angular/router';
import { LoginService } from '../modal-login/service/login.service';
import { Routes, RouterModule } from '@angular/router';
import { Register } from '../modal-login/service/Register';
import { CustomerProfileService } from '../profile/service/customer-profile.service';
import { filter } from 'rxjs/operators';
import { NavigationEvent } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import { NgxSpinnerService } from 'ngx-spinner';

import { LocalService } from '../localStorage/local.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart/service/cart.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Id: number | undefined;
  public username: string | undefined
  public userimg: string | undefined
  public userrole: string | undefined
  public slidershow: boolean | undefined
  userDetails1: any | undefined;
  currentRoute!: string;
  isheadersticky: string = "sticky-top";
  data1: Register | undefined;
  loading:boolean = false;
  imageSrc:any;
  activatedRoute: any;
  items$ = this.cartService.items$  ;
  constructor(public router: Router, public cartService:CartService,
    private customerProfileService: CustomerProfileService,
     private localStore: LocalService,
     private toastrService: ToastrService,
     private spinnerService: NgxSpinnerService) {
  }
  

  ngOnInit(): void {
    this.getLocalStorageData();
    this.geturl();
    // this.username = this.userDetails1;
    
    $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });

    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });

  }

  toggleMenu() {
    $(".page-wrapper").removeClass("toggled");
   
    let id = this.Id
    let username = this.username
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
        username: username
      }
    };
    
    if(this.userrole == 'Astrology') {
     
      this.router.navigate(['/user-profile']);
      
    }
    else {
     
      this.router.navigate(['/profile-editor'], navigationExtras);
    }
    this.geturl();
    console.log(navigationExtras);
    
  }

  public doSomething(date: any): void {
    debugger
    if (date == "sticky-top") {
      this.isheadersticky = ""
    }
    else if (date == "") {
      this.isheadersticky = "sticky-top"
    } else {
      this.username = date.UserName
      this.Id = date.id
      this.imageSrc = 'data:image/png;base64,'+ date.image
      this.userrole = '';
    }
  }
  logout() {
    $(".page-wrapper").removeClass("toggled");
    this.localStore.removeData('login');
    this.getLocalStorageData();
    this.toastrService.success('Logout Sucessfully !');
    this.router.navigate(['/']);
    
  }
 geturl(){
  this.router.events.subscribe(val => {
    if (val instanceof NavigationEnd) {
      console.log('url',val.urlAfterRedirects);
      if (val.url == "/") {
        this.slidershow = true;
      }
      else {
        this.slidershow = false;
      }

    }
  });
}
  getLocalStorageData() {
    const loginDetails = localStorage.getItem('login');
    if (loginDetails) {
      this.data1 = JSON.parse(this.localStore.getData('login'));
      this.username = this.data1?.UserName
      this.Id = this.data1?.Id
      this.imageSrc = 'data:image/png;base64,' + this.data1?.image
      this.userrole = '';
    } else {
      this.username = "Sanjay Shastri"
      this.userrole = 'Astrology';
      this.imageSrc  = '~/../assets/FB_IMG_1650791485531.jpg';
    }
  }
}


