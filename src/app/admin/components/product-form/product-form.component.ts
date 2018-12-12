import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductHttpService } from 'src/app/products/services/product-http.service';
import { switchMap } from 'rxjs/operators';
import { IProductModel, ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})
export class ProductFormComponent implements OnInit {
  private model: IProductModel;
  constructor(private route: ActivatedRoute, private router: Router, private productHttpService: ProductHttpService) { }

  ngOnInit() {
    this.model = new ProductModel();
    this.route.paramMap
      .pipe(switchMap((params: Params) => {
        return params.get('productId') ?
          this.productHttpService.getProduct(params.get('productId')) :
          Promise.resolve(null);
      }))
      .subscribe(
        data => this.model = { ...data },
        err => console.log(err));
  }

  onSubmit() {
    if (this.model.id) {
      this.productHttpService.updateProduct(this.model).then(x => {
        this.router.navigate(['/admin/products']);
      });
    } else {
      this.productHttpService.createProduct(this.model).then(x => {
        this.router.navigate(['/admin/products']);
      });
    }
  }

}
