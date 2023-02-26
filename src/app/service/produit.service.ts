import { Injectable } from '@angular/core';
import Produit from "../entities/Produit";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  URL: string = "http://localhost:3000";
  produits: Array<Produit> =  [];
  ids: number | null = null;

  constructor(private httpClient: HttpClient) {
    this.ids = this.init();
  }

  init() : number | null {
    this.getAll().subscribe(value => {
      return Math.max(...value.map(p => p.id)) + 1;
    })
    return null;
  }

  getAll(): Observable<Array<Produit>> {
    return this.httpClient.get<Array<Produit>>(`/api/products`);
  }

  add(produit: Produit): Observable<any> {
    return this.httpClient.post<any>(`/api/products`,produit);
  }

  edit(id:number,updatedProduct: Produit): Observable<any> {
    return this.httpClient.put<any>(`/api/products/${id}`,updatedProduct);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`/api/products/${id}`);
  }

  getById(id: number): Observable<Produit> {
    return this.httpClient.get<Produit>(`/api/products/${id}`);
  }
}
