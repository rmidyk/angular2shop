import { Injectable } from '@angular/core';
import { IProductModel } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: IProductModel[];

  getProductsInCart() {
    return this.products;
  }

  addProductToCart(product: IProductModel) {
    this.products.push(product);
  }

  removeProductFromCart(product: IProductModel) {
    var index = this.products.indexOf(product);
    this.products.slice(index, 1);
  }

  isInCart(product: IProductModel) {
    return this.products.includes(product);
  }

  constructor() {
    this.products = [];
  }
}
