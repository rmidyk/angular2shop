import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.less']
})
export class CartDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CartDialogComponent>,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
  }

  confirm() {
    console.log('Confirmed!');
    this.dialogRef.close();
    this.router.navigate(['/cart/order'])
  }

  discard() {
    this.cartService.clearCart();
    this.dialogRef.close();
  }
}
