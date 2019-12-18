import { Injectable } from '@angular/core';
import { Roupa } from './roupas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  mala: Roupa[];
  cliente: Roupa[];

  constructor(private http: HttpClient) { }

  baseurl = 'http://localhost:3000';

  getMala(): Promise<Roupa[]> {
    return this.http.get<Roupa[]>(`${this.baseurl}/minha-mala`).toPromise();
  }

  finalizarCompra(carrinho: Roupa[]) {
    return this.http.post(`${this.baseurl}/finalizar`, carrinho).toPromise();
  } 

}
