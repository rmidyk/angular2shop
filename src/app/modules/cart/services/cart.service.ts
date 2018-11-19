import { Injectable } from '@angular/core';
import { IProductModel } from '../../product/models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[];

  constructor() {
    this.cartItems = [];
  }

  getCartItems() {
    return this.cartItems;
  }

  addProductToCart(product: IProductModel, quantity: number = 1) {
    var cartItem = this.cartItems.find(x => x.product == product);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = new CartItem();
      cartItem.quantity = quantity;
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

  clearCart() {
    this.cartItems = [];
  }
}
