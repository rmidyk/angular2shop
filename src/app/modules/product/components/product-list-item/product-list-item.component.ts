import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../core/enums/category.enum';
import { IProductModel } from '../../../core/models/product.model';
import { CartService } from '../../../cart/services/cart.service';

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
