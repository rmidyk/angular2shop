import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';
import { IProductModel } from '../../models/product.model';
import { Category } from '../../enums/category.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products: IProductModel[];
  constructor(private productService: ProductService, private cartService: CartService) { }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  onBuy(product: IProductModel) {
    this.cartService.addProductToCart(product);
  }
  ngAfterViewInit(): void {
    console.log('ProductListComponent AfterViewInit');
  }
}
