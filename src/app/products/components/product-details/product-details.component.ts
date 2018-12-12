import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Params } from '@angular/router';
import { IProductModel } from '../../models/product.model';
import { switchMap } from 'rxjs/operators';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { ProductHttpService } from '../../services/product-http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  product: IProductModel;
  constructor(private productHttpService: ProductHttpService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params: Params) => this.productHttpService.getProduct(params.get('productId'))))
      .subscribe(
        data => this.product = { ...data },
        err => console.log(err));
  }

}
