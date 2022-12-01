import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/service/cart.service';
import { CartItem } from 'src/app/cart/service/cartitem';
import { LocalService } from 'src/app/localStorage/local.service';
import { LoginService } from 'src/app/modal-login/service/login.service';
import { Product } from '../service/product';


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
@Output() cartDetails = new EventEmitter<any>();


productDetails:any= [
  {
    id: 1,
    name: 'GH',
    product_discription:'H',
    img: 'GH',
    price: 2500
  },
  {
    id: 2,
    name: 'television',
    img:'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg',
    price: 8950
  },
  {
    id: 3,
    name: 'Macbook Pro',
    img:'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg',
    price: 4000
  }

];
  data1: any;
  data2!: CartItem;

  constructor(public router:Router,
    private localStorage: LocalService,private cartService: LoginService) { }

  ngOnInit(): void {
  }
  addItem(cartItem:CartItem){
    debugger
  //  console.log("cart details",cartItem)
  //  this.cartDetails.emit(cartItem);
   const loginDetails = localStorage.getItem('login');
  //  if (loginDetails) {
  //    this.data1 = JSON.parse(this.localStorage.getData('login'));
 
  //   //  this.data2.id = product
  //   cartItem.user_id = this.data1?.user_id
  //  }
  //  delete product['name'];
  //  delete product['description'];
  //  delete product['price'];
  //  delete product['img'];
   
  
   this.cartService.addToCart1(cartItem);
   
  //  this.router.navigate(['/order']);
  }
  
}
