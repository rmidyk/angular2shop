import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CartService } from '../../services/cart.service';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-cart-toolbar',
  templateUrl: './cart-toolbar.component.html',
  styleUrls: ['./cart-toolbar.component.less']
})
export class CartToolbarComponent implements OnInit {

  constructor(private dialog: MatDialog, private cartService: CartService) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CartDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      /* this.animal = result; */
    });
  }

  isOpenDialogButtonVisible() {
    return this.cartService.getProductsAmount() > 0;
  }

  getCartInfo() {
    var productsAmount = this.cartService.getProductsAmount();
    if (productsAmount == 0) {
      return 'Empty Cart!';
    } else {
      return `You have ${productsAmount} products in cart, $${this.cartService.getTotalPrice()} in total.`
    }
  }

}


