import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.less']
})
export class CartOrderComponent implements OnInit, AfterViewInit {
  infoFormGroup: FormGroup;
  paymentFormGroup: FormGroup;
  @ViewChild('stepper') stepper: MatStepper;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.infoFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.paymentFormGroup = this._formBuilder.group({
      cardNumber: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.stepper.selectedIndex = 1;
  }

}
