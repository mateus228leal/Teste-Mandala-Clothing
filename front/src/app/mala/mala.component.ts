import { Component, OnInit } from "@angular/core";
import { ClientService } from "../shared/client-service.service";
import { Roupa } from "../shared/roupas";
import { CarrinhoService } from "../shared/carrinho.service";

@Component({
  selector: "app-mala",
  templateUrl: "./mala.component.html",
  styleUrls: ["./mala.component.scss"]
})
export class MalaComponent implements OnInit {
  mala: Roupa[];

  constructor(
    private client: ClientService,
    private carrinhoService: CarrinhoService
  ) {
    this.mala = [];
  }

  ngOnInit() {
    this.loadItems();
  }

  async loadItems() {
    try {
      this.mala = await this.client.getMala();
    } catch (err) {
      console.log(err);
    }
  }

  addToCart(item: Roupa) {
    this.carrinhoService.add(item);
  }

  cartContains(item: Roupa) {
    return this.carrinhoService.cart.value.find((peca) => peca.id === item.id);
  }
}
