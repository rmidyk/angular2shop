import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProductModel } from '../../../core/models/product.model';
import { Category } from '../../../core/enums/category.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products: IProductModel[];
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
