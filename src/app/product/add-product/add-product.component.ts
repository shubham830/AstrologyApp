import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../service/product";
import { ProductService } from "../service/product.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  constructor() {}

  ngOnInit() {}

  createProduct(productForm: NgForm) {
    // const payload: Product = {
    //   ...productForm.value,
    //   productId: "PROD_" + shortId.generate(),
    //   productAdded: moment().unix(),
    //   ratings: Math.floor(Math.random() * 5 + 1),
    //   favourite: false,
    // };

    // if (productForm.value.productImageUrl === undefined) {
    //   payload.productImageUrl =
    //     "http://via.placeholder.com/640x360/007bff/ffffff";
    // }

    // this.productService.createProduct(payload, () => {
    //   this.product = new Product();
    //   $("#exampleModalLong").modal("hide");
    //   toastr.success(
    //     "product " + payload.productName + "is added successfully",
    //     "Product Creation"
    //   );
    // });
  }
}
