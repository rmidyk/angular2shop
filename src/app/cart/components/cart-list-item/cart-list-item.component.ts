import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.less']
})
export class CartListItemComponent implements OnInit {

  @Input()
  model: CartItem

  @Output()
  remove: EventEmitter<CartItem> = new EventEmitter();

  constructor() {
    console.log('CartListItem on constructor');
  }

  ngOnInit() {
    console.log('CartListItem on init');
  }

  ngOnDestroy() {
    console.log('CartListItem on destroy');
  }

  onClick() {
    this.remove.emit(this.model);
  }

}
