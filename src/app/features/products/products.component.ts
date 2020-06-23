import { Component, OnDestroy, Input, OnChanges } from "@angular/core";
import { Product } from "src/app/shared/interfaces/product.interface";
import { ProductsService } from "src/app/shared/services/products.service";
import { Observable, Subscription } from "rxjs";
import { OrderService } from "src/app/shared/services/order.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnDestroy, OnChanges {
  @Input() filterString = "";
  public products$: Observable<Product[]>;
  public subcribes$: Subscription[] = [];
  public resultCount: number;

  constructor(
    private readonly productsService: ProductsService,
    private readonly orderService: OrderService
  ) {
    this.products$ = this.productsService.getAllProducts$();
    this.resultCount = this.productsService.getProductCount();
    if (!this.orderService.isOrderOpen()) {
      this.orderService.createNewOrder(`order${new Date()}`);
    }
  }

  public ngOnChanges(): void {
    this.products$ = this.productsService.getFilteredProducts$(
      this.filterString
    );
    this.subcribes$.push(
      this.products$.subscribe(
        (products) => (this.resultCount = products.length)
      )
    );
  }

  public ngOnDestroy(): void {
    this.subcribes$.forEach((elem) => elem.unsubscribe());
  }

  public trackByProductId(index: number, product: Product): number {
    return product.id;
  }

  public onAddProductToCart(product: Product): void {
    this.orderService.insertProductInOrder(product);
  }

  public checkIsGreaterThenMaxOrderCount(): boolean {
    return this.orderService.isGreaterThanMaxOrderCount();
  }
}
