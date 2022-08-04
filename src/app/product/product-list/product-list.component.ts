import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
@Output() cartDetails = new EventEmitter<any>();


productDetails:any = [
  {
    id: 1,
    name: 'iPhone 6s',
    description:'ASUS TUF FX505DT Gaming Laptop- 15.6", 120Hz Full HD, AMD Ryzen 5 R5-3550H Processor, GeForce GTX 1650 Graphics, 8GB DDR4, 256GB PCIe SSD, RGB Keyboard, Windows 10 64-bit - FX505DT-AH51',
    img: 'https://m.media-amazon.com/images/I/81gK08T6tYL._AC_SL1500_.jpg',
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

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  addItem(item:any){
   console.log("cart details",item)
   this.cartDetails.emit(item);
   this.router.navigate(['/order']);
  }
}
