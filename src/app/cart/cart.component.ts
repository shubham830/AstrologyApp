import { Component, Input, OnInit } from '@angular/core';
import { LocalService } from '../localStorage/local.service';
import { Product } from '../product/service/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 product!:any[];
 isEmpty:boolean = false
  @Input() cartDetails: any[] | undefined;
  constructor(private localStorage: LocalService) { }

  ngOnInit(): void {
    this.getCartDetails();
  }

  btnDelete(id:number){
    debugger
    let newList= JSON.parse(this.localStorage.getData("addToCart"))
    let index = newList.findIndex((element: { id: number; }) => element.id === id)
    newList.splice(index, 1);
    localStorage.setItem('addToCart', JSON.stringify(newList));
    this.getCartDetails();
  }

  getCartDetails(){
    debugger
    const cartDetails = this.localStorage.getData("addToCart");
    if(cartDetails){
      this.product = JSON.parse(this.localStorage.getData("addToCart"))
      console.log("cart", this.product)
    } else{
      this.isEmpty = true;
    }
  }
}
