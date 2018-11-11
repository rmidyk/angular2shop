import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../enums/category.enum';
import { IProductModel } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.less'],
})
export class ProductListItemComponent implements OnInit {
  @Input()
  model: IProductModel;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  getCategoryName() {
    return Category[this.model.category];
  }

  buy() {
    this.cartService.addProductToCart(this.model);
  }

  canBuy(): boolean {
    return !this.cartService.isInCart(this.model);
  }

}
