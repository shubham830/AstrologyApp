import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  @Input() cartDetails: any[] | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log("cart",this.cartDetails)
  }

}