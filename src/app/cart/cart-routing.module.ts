import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartOrderComponent } from './components/cart-order/cart-order.component';

const routes: Routes = [{
  path: 'cart/order',
  component: CartOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
