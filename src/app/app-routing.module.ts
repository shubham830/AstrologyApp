import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogPostComponent } from './Blog-post/admin/admin-blog/admin-blog-post/admin-blog-post.component';
import { AdminBlogComponent } from './Blog-post/admin/admin-blog/admin-blog.component';
import { BlogListComponent } from './Blog-post/blog/blog-list/blog-list.component';
import { BlogPostComponent } from './Blog-post/blog/blog-post/blog-post.component';
import { CartComponent } from './cart/cart.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserProfileComponent } from './layout/user-profile/user-profile.component';
import { RegisterComponent } from './modal-login/register/register.component';
import { ResetpasswordComponent } from './modal-login/resetpassword/resetpassword.component';
import { OrderComponent } from './order/order.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CustomerProfileComponent } from './profile/customer-profile/customer-profile.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { UserAddressesComponent } from './user-addresses/user-addresses.component';

const routes: Routes = [
  { path:'user-profile',component: UserProfileComponent },
  { path:'gallery',component: GalleryComponent },
  { path:'product-list',component: ProductListComponent },
  { path:'cart',component: CartComponent },
  { path:'order',component: OrderComponent },
  { path:'profile-editor',component: CustomerProfileComponent },
  { path:'add-product',component: AddProductComponent },
  { path:'register',component: RegisterComponent },
  { path:'resetpassword',component: ResetpasswordComponent },
  { path:'ProgressBarComponent',component: ProgressBarComponent },
  { path:'user-address',component: UserAddressesComponent },
  { path: 'blog/:ArticleId', component: BlogPostComponent },
  { path: 'admin', component: AdminBlogComponent },
  { path: 'admin/blog/:ArticleId', component: AdminBlogPostComponent },
  { path: 'AdminBlogComponent', component: BlogListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
