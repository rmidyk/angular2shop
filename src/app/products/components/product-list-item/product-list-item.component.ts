import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Category } from '../../enums/category.enum';
import { IProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListItemComponent implements OnInit {
  @Input()
  model: IProductModel;

  @Output()
  buy: EventEmitter<IProductModel> = new EventEmitter();

  @Output()
  details: EventEmitter<IProductModel> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getCategoryName() {
    return this.model.category;
  }

  onClick() {
    this.buy.emit(this.model);
  }

  onDetailsButtonClick() {
    this.details.emit(this.model);
  }

  isDisabled(): boolean {
    return !this.model.isAvailable;
  }

}
