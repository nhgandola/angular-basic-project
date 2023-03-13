import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  addItemToCart(product: Product) {
    this.items.push(product);
    console.log(this.items);
  }

  getCartItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get<
      { type: string;
        price: number } []> (
      '/assets/shipping.json'
    );
  }
}
