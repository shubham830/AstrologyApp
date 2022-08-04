import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  header : any; 

  constructor(private http: HttpClient) { 
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }
   
     createOrder(order: { name: any; email: any; phone: any; amount: any; }): Observable<any> {
        return this.http.post('https://api.razorpay.com/v1/' + 'orders', {
        customerName: order.name,
        email: order.email,
        phoneNumber: order.phone,
        amount: order.amount
        }, httpOptions);
    }
   
    updateOrder(order: { razorpay_order_id: any; razorpay_payment_id: any; razorpay_signature: any; }): Observable<any> {
        return this.http.put('https://api.razorpay.com/v1/' + 'orders', {
        razorpayOrderId: order.razorpay_order_id,
        razorpayPaymentId: order.razorpay_payment_id,
        razorpaySignature: order.razorpay_signature
        }, httpOptions);
    }
}
