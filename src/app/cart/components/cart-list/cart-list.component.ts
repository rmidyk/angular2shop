import { Component, OnInit, DoCheck, IterableDiffers } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProductModel } from '../../../products/models/product.model';
import { CartItem } from '../../models/cart-item.model';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less']
})
export class CartListComponent implements OnInit, DoCheck {
  get cartItems(): CartItem[] {
    return this.cartService.getCartItems();
  }
  differ: any;
  p = new CartItem();
  sortProperties = [];
  selectedProperty: any;

  constructor(private cartService: CartService, private differs: IterableDiffers,) { }

  ngOnInit() {
    this.differ = this.differs.find(this.cartItems).create(null);
    this.sortProperties = this.cartService.getSortProperties();
    this.selectedProperty = this.sortProperties[0].propertyName;
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
