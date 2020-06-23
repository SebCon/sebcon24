import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { SearchComponent } from './features/search/search.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'produkte'
  },
  {
    path: 'produkte',
    component: ProductsComponent
  },
  {
    path: 'warenkorb',
    loadChildren: './features/cart/cart.module#CartModule'
  },
  {
    path: 'suche',
    component: SearchComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
