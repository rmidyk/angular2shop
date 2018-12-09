import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';
import { IProductModel } from '../../models/product.model';
import { Category } from '../../enums/category.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products: Promise<IProductModel[]>;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router) { }
  ngOnInit() {
    this.products = this.productService.getProducts();
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
