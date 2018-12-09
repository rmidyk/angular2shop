import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-feedback',
  templateUrl: './product-details-feedback.component.html',
  styleUrls: ['./product-details-feedback.component.less']
})
export class ProductDetailsFeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('feedbackinit');
  }

}
