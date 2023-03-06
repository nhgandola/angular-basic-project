import { Component } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: Product[] = this.cartService.getCartItems();

  constructor(private cartService: CartService) {}
}
