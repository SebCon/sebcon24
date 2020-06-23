import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CartComponent } from "./cart.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ProductItemComponent } from "./cart-item/product-item/product-item.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AddressFormComponent } from "./cart-item/address-form/address-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./cart-item/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: "",
    component: CartComponent
  },
  {
    path: "product-detail/:id",
    component: ProductDetailComponent
  }
];
@NgModule({
  declarations: [
    CartItemComponent,
    CartComponent,
    ProductItemComponent,
    AddressFormComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartModule {}
