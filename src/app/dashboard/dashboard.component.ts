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
import { async } from 'rxjs';
import { Product } from '../product/service/product';

interface Item {
  name: string;
  icon?: string;
  route: string;
  children?: Item[];
}
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
  loading: boolean = false;
  imageSrc: any;
  activatedRoute: any;
  items$ = this.cartService.items$;
  count: any;
  customerMenuShow: boolean = false;
  isloginbtn:boolean =true;
  islogoutbtn:boolean = false;
  isbloglist:boolean | undefined;
  imageSrcH = '~/../assets/hanuman ji.png';
  // Component
 menulist :any;
  mainMenuList = [
  { id:1, menuName:'Astro Shop', routerLink:'/product-list', icon:'fa fa-shopping-cart', menuPermission:"C" },
  { id:2, menuName:'My Order', routerLink:'',icon:'fa fa-shopping-cart', menuPermission:"C"},
  { id:3, menuName:'Edit Profile', routerLink:'/profile-editor', icon:'fa fa-user', menuPermission:"C" },
  { id:4, menuName:'Saved addresses', routerLink:'/profile-editor', icon:'', menuPermission:"C"},
  { id:5, menuName:'Notification', routerLink:'/profile-editor', icon:'fa fa-bell', menuPermission:"C" },
  { id:6, menuName:'Gallery', routerLink:'/gallery', icon:'fa fa-picture-o', menuPermission:"C" },
 
  // { id:7, menuName:'Edit Profile', routerLink:'/cart', icon:'fa fa-user', menuPermission:"A" },
  { id:8, menuName:'Products', routerLink:'/product-list', icon:'fa fa-product-hunt', menuPermission:"A" },
  { id:9, menuName:'Orders', routerLink:'/cart' , icon:'fa fa-shopping-cart', menuPermission:"A" },
  { id:10, menuName:'Post', routerLink:'/admin', icon:'fa fa-sticky-note-o', menuPermission:"A" },
  { id:11, menuName:'Discounts', routerLink:'/cart', icon:'fa fa-percent', menuPermission:"A" },
  { id:12, menuName:'Notification', routerLink:'/profile-editor', icon:'fa fa-bell', menuPermission:"A" },

  { id:13, menuName:'Astro Shop', routerLink:'/product-list', icon:'fa fa-shopping-cart', menuPermission:"D" },
  { id:14, menuName:'Article', routerLink:'/AdminBlogComponent', icon:'fa fa-pencil', menuPermission:"D" },
  { id:15, menuName:'Gallery', routerLink:'/gallery', icon:'fa fa-picture-o', menuPermission:"D" },
]

  

  constructor(public router: Router, public cartService: CartService,
    private customerProfileService: CustomerProfileService,
    private localStorage: LocalService,
    private toastrService: ToastrService,
    private spinnerService: NgxSpinnerService) {

  }

  ngOnInit(): void {
    let productDetails = this.localStorage.getData("addToCart")
    if (productDetails) {
      this.count = JSON.parse(this.localStorage.getData("addToCart")).length
    } else {
      this.cartService.items$.subscribe(result => this.count = result.length);

    }

    let item = "";
    this.getLocalStorageData(item);
    this.geturl();
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
    // if (item == "product-list") {
    //   this.router.navigate(['/product-list']);
    // } else {
    //   if (this.userrole == 'Astrology') {
    //     this.router.navigate(['/user-profile']);
    //   } else {
    //     this.router.navigate(['/profile-editor'], navigationExtras);
    //   }
    // }


    this.geturl();
    console.log(navigationExtras);

  }

  public doSomething(date: any): void {
    debugger
    if (date == "sticky-top") {
      this.isheadersticky = ""
    } else if (date == "") {
      this.isheadersticky = "sticky-top"
      this.getLocalStorageData("");
    } else {
      this.isloginbtn = false;
      this.islogoutbtn= true;
      this.username = date.first_name +" "+ date.last_name
      this.Id = date.id
      this.imageSrc = 'data:image/png;base64,' + date.image
      this.userrole = '';
    }
  }

  public logout() {
    debugger
    $(".page-wrapper").removeClass("toggled");
    let item = "Logout"
    
    this.localStorage.removeData('login');
    this.getLocalStorageData(item);
    this.router.navigate(['/']);
  }

  public geturl() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url == "/") {
          this.slidershow = true;
          this.isbloglist = true;
        } else {
          this.slidershow = false;
          this.isbloglist = false;
        }
      }
    });
  }

  public getLocalStorageData(item: string) {
    const loginDetails = localStorage.getItem('login');
    if (loginDetails) {
      this.data1 = JSON.parse(this.localStorage.getData('login'));
      this.username = this.data1?.first_name + " " + this.data1?.last_name;
      this.isloginbtn= false;
      this.islogoutbtn= true;
      this.Id = this.data1?.Id
      this.imageSrc = 'data:image/png;base64,' + this.data1?.image
      this.userrole = this.data1?.user_type;
      console.log('userrole',this.data1 );
      if(this.userrole == "admin"){
        this.menulist = this.mainMenuList.filter(m=> m.menuPermission == "A");
      } else {
        this.menulist = this.mainMenuList.filter(m=> m.menuPermission == "C");
      }
      
    } else {
      this.menulist = this.mainMenuList.filter(m=> m.menuPermission == "D");
      this.isloginbtn= true;
      this.islogoutbtn = false;
      this.username = "Sanjay Shastri"
      this.userrole = 'Astrology';
      this.imageSrc = '~/../assets/FB_IMG_1650791485531.jpg';
      if (item == "Logout") {
        this.toastrService.success('Logout Sucessfully !');
      }
    }

    

  }

  userProfile(){
    const loginDetails = localStorage.getItem('login');
    if (loginDetails) {
     
    } else {
      this.router.navigate(['/user-profile']);
    }
  }
  home(){
    this.geturl();
  }
}


