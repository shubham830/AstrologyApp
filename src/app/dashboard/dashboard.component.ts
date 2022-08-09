import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationExtras, NavigationStart, Router } from '@angular/router';
import { LoginService } from '../modal-login/service/login.service';
import { Routes, RouterModule } from '@angular/router';
import { Register } from '../modal-login/service/Register';
import { CustomerProfileService } from '../profile/service/customer-profile.service';
import { filter } from 'rxjs/operators';
import { NavigationEvent } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
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
  
  activatedRoute: any;
  constructor(public router: Router, private customerProfileService: CustomerProfileService) {
             
  
   
  }
  imageSrc = '~/../assets/FB_IMG_1650791485531.jpg';
  
  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if(val.url == "/"   ) {
          this.slidershow = true;
        }
        else{
          this.slidershow = false;
        }
        
      }
    });
    
    
    
    this.username = this.userDetails1;
    this.userrole = 'Astrology';
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
    this.slidershow = false;
    let id = this.Id
    let username = this.username
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
        username: username
      }
    };
    console.log(navigationExtras);
    this.router.navigate(['/profile-editor'], navigationExtras);
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
    }
  }
}


