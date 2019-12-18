import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Roupa } from './roupas';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  cart: BehaviorSubject<Roupa[]> = new BehaviorSubject([]);

  constructor() { }

  add(item: Roupa) {
    const newCart = [...this.cart.value, item];
    this.cart.next(newCart);
  }

  remove(index: number, peca: Roupa) {
    const newCart = this.cart.value.filter((item, i) => i !== index );
    this.cart.next(newCart);
  }

  reset() {
    this.cart.next([]);
  }

  
}
