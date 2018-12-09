import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  appTitle: ElementRef;

  constructor(private cartService: CartService) {

  }

  ngAfterViewInit(): void {
    console.log(this.appTitle);
    // this.appTitle.nativeElement.innerText='Welcome to Bike shop!';
  }

  getProductsCount() {
    return this.cartService.getProductsAmount() || null;
  }

  title = 'shop';
}
