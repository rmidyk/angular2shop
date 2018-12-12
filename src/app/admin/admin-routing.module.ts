import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageOrdersComponent, ManageProductsComponent, AdminDashboardComponent } from './components';
import { AuthGuard } from './../core';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      children: [
        { path: 'orders', component: ManageOrdersComponent },
        { path: 'products', component: ManageProductsComponent },
        { path: 'products/:productId', component: ProductFormComponent },
        { path: 'product/create', component: ProductFormComponent },
        { path: '', component: AdminDashboardComponent }
      ]
    }
  ]
}
];

export const adminRouterComponents = [AdminComponent, AdminDashboardComponent, ManageProductsComponent, ManageOrdersComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
