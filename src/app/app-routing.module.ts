import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserProfileComponent } from './layout/user-profile/user-profile.component';
import { RegisterComponent } from './modal-login/register/register.component';
import { ResetpasswordComponent } from './modal-login/resetpassword/resetpassword.component';
import { OrderComponent } from './order/order.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CustomerProfileComponent } from './profile/customer-profile/customer-profile.component';

const routes: Routes = [
  {path:'user-profile',component: UserProfileComponent},
  {path:'gallery',component: GalleryComponent},
  {path:'product-list',component: ProductListComponent},
  {path:'cart',component: CartComponent},
  {path:'order',component: OrderComponent},
  {path:'profile-editor',component: CustomerProfileComponent},
  {path:'add-product',component: AddProductComponent},
  {path:'register',component: RegisterComponent},
  {path:'resetpassword',component: ResetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
