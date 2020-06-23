import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartModule } from "./cart/cart.module";
import { FooterComponent } from "./footer/footer.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeaderModule } from "./header/header.module";
import { ProductsModule } from "./products/products.module";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent,
    PageNotFoundComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ProductsModule,
    FormsModule,
    RouterModule
  ],
  exports: [FooterComponent, HeaderComponent, NavigationComponent]
})
export class FeaturesModule {}
