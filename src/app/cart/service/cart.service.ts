import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductListComponent } from '../././../product/product-list/product-list.component';
import { take, map } from 'rxjs/operators';
import { LocalService } from 'src/app/localStorage/local.service';
import { Product } from 'src/app/product/service/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartItem } from './cartitem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  Url1: string;
  header1: any;
  
  constructor(private localStorage: LocalService,private http1: HttpClient) {
    this.Url1 = 'https://localhost:44398/Api/login/';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header1 = new HttpHeaders(headerSettings);
  }

  private itemsSubject = new BehaviorSubject<Product[]>([]);
  items$ = this.itemsSubject.asObservable();
 
  addToCart(cartItem: CartItem) {
    // this.items$.pipe(
    //   take(1),
    //   map((products) => {
    //     debugger
    //     products.push(product);
    //     if ((this.localStorage.getData("addToCart"))) {
    //     var product1 = [];
    //     product1 = JSON.parse(this.localStorage.getData("addToCart"));
    //     const existingIndex = product1.findIndex((item: { id: any; }) => item.id === product.id);
    //     if(existingIndex == 1){
    //     }
    //     else {
    //       product1.push(product);
    //       this.localStorage.saveData("addToCart",JSON.stringify(product1))
    //     }
        
    //     } else {
         
    //       this.localStorage.saveData("addToCart",JSON.stringify(products))
    //       console.log("add",product);
    //     }
       
       
    //   }),
    // ).subscribe();

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http1.post<CartItem[]>(this.Url1 + 'addToCart', cartItem, httpOptions)
  }

}
