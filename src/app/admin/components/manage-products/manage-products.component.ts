import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/products/services/product-http.service';
import { Observable } from 'rxjs';
import { IProductModel } from 'src/app/products/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.less']
})
export class ManageProductsComponent implements OnInit {
  private products$: Observable<IProductModel[]>;
  constructor(private productHttpService: ProductHttpService, private router: Router) { }

  ngOnInit() {
    this.products$ = this.productHttpService.getProducts();
  }

  edit(product: IProductModel) {
    this.router.navigate([`admin/products/${product.id}`]);
  }

  create() {
    this.router.navigate([`admin/product/create`]);
  }

  remove(product: IProductModel) {
    this.productHttpService.deleteProduct(product).then(x => {
      this.products$ = this.productHttpService.getProducts();
    });
  }

}
