import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductListComponent } from '../././../product/product-list/product-list.component';
import { take, map } from 'rxjs/operators';
import { LocalService } from 'src/app/localStorage/local.service';
import { Product } from 'src/app/product/service/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private localStorage: LocalService) {
    
  }

  private itemsSubject = new BehaviorSubject<Product[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToCart(product: Product) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.push(product);
      
      }),
    ).subscribe();
  }

}
