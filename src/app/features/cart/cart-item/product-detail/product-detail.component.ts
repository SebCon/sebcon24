import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "src/app/shared/services/products.service";
import { Product } from "src/app/shared/interfaces/product.interface";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  public product: Product;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productsService: ProductsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.product = this.productsService.getProductById(parseFloat(params.id));
    });
  }
}
