import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../layout/slider/slider.component';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from '../layout/user-profile/user-profile.component';
import { GalleryComponent  }   from '../gallery/gallery.component'
import { ModalComponent }   from '../layout/modal/modal.component'
import { ProductListComponent} from '../product/product-list/product-list.component'
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { OrderComponent } from '../order/order.component';
import { CustomerProfileComponent } from '../profile/customer-profile/customer-profile.component';
import { AddProductComponent } from '../product/add-product/add-product.component';
import { LoginComponent } from '../modal-login/login/login.component';
import { RegisterComponent } from '../modal-login/register/register.component';
import { ForgotpasswordformComponent } from '../modal-login/forgotpasswordform/forgotpasswordform.component'
import { ClarityModule } from '@clr/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';



  import { ResetpasswordComponent  } from '../modal-login/resetpassword/resetpassword.component';
@NgModule({
  declarations: [
    DashboardComponent,
   UserProfileComponent,AddProductComponent,LoginComponent,ForgotpasswordformComponent,RegisterComponent,ResetpasswordComponent
  ],
  exports: [DashboardComponent],

  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    SlickCarouselModule,BrowserAnimationsModule, ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    ReactiveFormsModule, FormsModule, ClarityModule,BrowserModule,RouterModule
  ]
})
export class DashboardModule { }
