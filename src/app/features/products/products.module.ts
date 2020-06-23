import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [ProductsComponent, ProductItemComponent],
  imports: [CommonModule, FontAwesomeModule, SharedModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
