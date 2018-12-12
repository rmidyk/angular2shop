import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { IProductModel } from '../../models/product.model';
import { Category } from '../../enums/category.enum';
import { Router } from '@angular/router';
import { ProductHttpService } from '../../services/product-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products$: Observable<IProductModel[]>;
  constructor(
    private productHttpService: ProductHttpService,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
    this.products$ = this.productHttpService.getProducts();
  }
  onBuy(product: IProductModel) {
    this.cartService.addProductToCart(product);
  }
  onDetails(product: IProductModel) {
    const link = ['/products/', product.id];
    this.router.navigate(link);
  }
  ngAfterViewInit(): void {
    console.log('ProductListComponent AfterViewInit');
  }
}
