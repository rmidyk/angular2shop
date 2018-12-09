import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductListComponent, ProductDetailsComponent, ProductDetailsFeedbackComponent } from './components';
import { ProductDetailsPhotosComponent } from './components/product-details-photos/product-details-photos.component';

/* import { CanDeactivateGuard } from './../core';
import { UserResolveGuard } from './guards'; */


const routes: Routes = [{
  path: 'products',
  component: ProductsComponent,
  children: [
    /*     {
          path: 'add',
          component: UserFormComponent
        },
        {
          path: 'edit/:productId',
          component: UserFormComponent,
          canDeactivate: [CanDeactivateGuard],
          resolve: {
            user: UserResolveGuard
          }
        }, */
    {
      path: '',
      component: ProductListComponent
    },
    {
      path: ':productId',
      component: ProductDetailsComponent,
      children: [
        {
          path: '',
          redirectTo: 'photo',
          pathMatch: 'full'
        },
        {
          path: 'photo',
          component: ProductDetailsPhotosComponent
        },
        {
          path: 'feedback',
          component: ProductDetailsFeedbackComponent
        }
      ]
    }

  ]
}];

export const usersRouterComponents = [ProductsComponent, ProductListComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
