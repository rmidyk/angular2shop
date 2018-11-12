import { Component, OnInit, DoCheck, IterableDiffers } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProductModel } from '../../../core/models/product.model';
import { CartItem } from '../../../core/models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less']
})
export class CartListComponent implements OnInit, DoCheck {
  cartItems: CartItem[];
  differ: any;
  constructor(private cartService: CartService, private differs: IterableDiffers) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.differ = this.differs.find(this.cartItems).create(null);
  }

  confirm() {
    console.log('Confirmed!');
  }

  discard() {
    this.cartItems.splice(0, this.cartItems.length);
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  getProductsAmount() {
    return this.cartService.getProductsAmount();
  }

  onRemove(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem);
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.cartItems);
    if (changes) {
      console.log(changes);
      changes.forEachAddedItem(r => console.log('Added', r.item));
      changes.forEachRemovedItem(r => console.log('Removed', r.item));
    }
  }
}
