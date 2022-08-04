import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order-services/order.service';
function _window() : any {
  // return the global native browser window object
  return window;
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  get nativeWindow() : any {
    return _window();
 }
  form: any = {}; 
  paymentId: string | undefined;
  error: string | undefined;
  orderForm!: FormGroup;
  Razorpay: any;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      // password: new FormControl('', [Validators.required]),
      // userName: new FormControl('', [Validators.required]),
    })
  }
  get emailField(): any {
    return this.orderForm.get('email');
  }
 
  options = {
    "key": "rzp_live_CGKnUsNi334bCt",
    "amount": "12", 
    "name": "SanjayAstro",
    "description": "Astrology",
    "image": "",
    "order_id":"",
    "handler": function (response: any){
        var event = new CustomEvent("payment.success", 
            {
                detail: response,
                bubbles: true,
                cancelable: true
            }
        );    
        window.dispatchEvent(event);
    }
    ,
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
    };
    onSubmit(orderDetails:any): void {
      debugger
      this.paymentId = ''; 
      this.error = ''; 
      
      // this.orderService.createOrder(orderDetails).subscribe(
      //   ( data: { secretKey: string; razorpayOrderId: string; applicationFee: string; }) => {
      //     this.options.key = data.secretKey;
      //     this.options.order_id = data.razorpayOrderId;
      //     this.options.amount = data.applicationFee; //paise
      //     this.options.prefill.name = orderDetails.name;
      //     this.options.prefill.email = orderDetails.email;
      //     this.options.prefill.contact =orderDetails.phone;
      //     var rzp1 = new this.Razorpay(this.options);
      //     rzp1.open();
                     
      //     rzp1.on('payment.failed',  (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }) =>{    
      //         // Todo - store this information in the server
      //         console.log(response.error.code);    
      //         console.log(response.error.description);    
      //         console.log(response.error.source);    
      //         console.log(response.error.step);    
      //         console.log(response.error.reason);    
      //         console.log(response.error.metadata.order_id);    
      //         console.log(response.error.metadata.payment_id);
      //         this.error = response.error.reason;
      //     }
      //     );
      // }
      // ,
      //   (      err: { error: { message: string | undefined; }; }) => {
      //     this.error = err.error.message;
      // }
      // );

      
          
          this.options.amount = "100" //paise
          this.options.prefill.name ="sh";
         this.options.prefill.email = "shubham843072@gmail.com";
           this.options.prefill.contact ="9760995364";
           var rzp1 =  this.nativeWindow.Razorpay(this.options);
           rzp1.open();
                     
           rzp1.on('payment.failed',  (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }) =>{    
               // Todo - store this information in the server
               console.log(response.error.code);    
               console.log(response.error.description);    
              console.log(response.error.source);    
              console.log(response.error.step);    
              console.log(response.error.reason);    
            console.log(response.error.metadata.order_id);    
            console.log(response.error.metadata.payment_id);
      this.error = response.error.reason;
           }
          );
       }
     
      

  @HostListener('window:payment.success', ['$event']) 
  onPaymentSuccess(event: { detail: any; }): void {
      this.orderService.updateOrder(event.detail).subscribe(
        (      data: { message: string | undefined; }) => {
          this.paymentId = data.message;
      }
      ,
        (      err: { error: { message: string | undefined; }; }) => {
          this.error = err.error.message;
      }
      );
  }
}
