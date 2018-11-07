import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IProductModel } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  productsInCart: IProductModel[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.productsInCart = this.cartService.getProductsInCart();
  }

  getTotal(): number {
    return this.productsInCart.reduce((prev, current) => {
      return prev + current.price;
    }, 0);
  }

  confirm() {
    console.log('Confirmed!');
  }

  discard() {
    this.productsInCart.splice(0, this.productsInCart.length);
  }

}
