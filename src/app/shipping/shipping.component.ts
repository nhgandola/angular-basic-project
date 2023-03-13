import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
    console.log(this.shippingCosts.subscribe((val) => console.log(val)));
  }
}
