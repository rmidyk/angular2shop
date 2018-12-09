import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Route, ActivatedRoute, Params } from '@angular/router';
import { IProductModel } from '../../models/product.model';
import { switchMap } from 'rxjs/operators';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  product: IProductModel;
  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params: Params) => this.productService.getProduct(params.get('productId'))))
      .subscribe(
        data => this.product = { ...data },
        err => console.log(err));
  }

}
