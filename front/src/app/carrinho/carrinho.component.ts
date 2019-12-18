import { Component, OnInit } from "@angular/core";
import { CarrinhoService } from "../shared/carrinho.service";
import { Observable } from "rxjs";
import { Roupa } from "../shared/roupas";
import { map } from "rxjs/operators";
import { ClientService } from "../shared/client-service.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: "app-carrinho",
  templateUrl: "./carrinho.component.html",
  styleUrls: ["./carrinho.component.scss"]
})
export class CarrinhoComponent implements OnInit {
  cart: Observable<Roupa[]>;
  total: Observable<number>;

  constructor(
    private carrinhoService: CarrinhoService,
    private clientService: ClientService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.cart = this.carrinhoService.cart.asObservable();
    this.total = this.carrinhoService.cart.asObservable().pipe(
      map(val => {
        return val.reduce((sum, item) => {
          return sum + item.preco;
        }, 0);
      })
    );
  }

  removeFromCart(index: number, item: Roupa) {
    this.carrinhoService.remove(index, item);
  }

  async finalizar() {
    try {
      const res = await this.clientService.finalizarCompra(
        this.carrinhoService.cart.value
      );
      console.log(res);

      this.carrinhoService.reset();

      await this.snackbar.open('Obrigado por comprar na Mandala Clothing!', 'Ok', {duration: 2500});
    } catch (error) {
      console.error(error);
    }
  }
}
