import { Injectable } from '@angular/core';
import { IProductModel } from '../../core/models/product.model';
import { CartItem } from '../../core/models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[];

  getCartItems() {
    return this.cartItems;
  }

  addProductToCart(product: IProductModel) {
    var cartItem = this.cartItems.find(x => x.product == product);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cartItem = new CartItem();
      cartItem.quantity = 1;
      cartItem.product = product;
      this.cartItems.push(cartItem);
    }
  }

  removeCartItem(cartItem: CartItem) {
    var index = this.cartItems.indexOf(cartItem);
    this.cartItems.splice(index, 1);
  }

  getTotalPrice() {
    var totalPrice = 0;
    this.cartItems.forEach(x => {
      totalPrice += x.quantity * x.product.price;
    });
    return totalPrice;
  }

  getProductsAmount() {
    return this.cartItems.reduce((prev, current) => {
      return prev += current.quantity;
    }, 0);
  }

  constructor() {
    this.cartItems = [];
  }
}
