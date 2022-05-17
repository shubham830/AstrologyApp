import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../layout/LoginApi/login.service'; 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public username: string | undefined
  public userimg: string | undefined
  public userrole: string | undefined
 
  constructor() { }
  imageSrc = '~/../assets/FB_IMG_1650791485531.jpg';
  ngOnInit(): void {
    this.username = 'Sanjay Shastri';
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

}
