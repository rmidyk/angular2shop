import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageOrdersComponent, ManageProductsComponent, AdminDashboardComponent } from './components';
import { AuthGuard } from './../core';

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
