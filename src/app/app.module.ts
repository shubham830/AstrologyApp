import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ModalLoginModule } from './modal-login/modal-login.module';
import { FooterComponent} from './layout/footer/footer.component';
import { HeaderComponent} from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerProfileComponent } from './profile/customer-profile/customer-profile.component';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { UserAddressesComponent } from './user-addresses/user-addresses.component'





@NgModule({
  declarations: [
    AppComponent,HeaderComponent, GalleryComponent, ProductListComponent, CartComponent, OrderComponent, CustomerProfileComponent, ProgressBarComponent, UserAddressesComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    DashboardModule,HttpClientModule,
    ReactiveFormsModule,FormsModule,ModalLoginModule,RouterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
