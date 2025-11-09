import { Injectable } from '@angular/core';
import { Produit } from '../model/produits.model';
import { ThisReceiver } from '@angular/compiler';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root', // derocateur
})
export class ProduitService {
  produits!: Produit[];
  apiURL: string = 'http://localhost:8090/produits/api';
  constructor(private http: HttpClient) {}

  //   this.produits=
  //   [
  //   {idProduit: 1,nomProduit: "pc asus",prixProduit:3000.600,dateCreation:new Date("02/10/2011")},
  //   {idProduit:2,nomProduit:"imprimante epson",prixProduit:450,dateCreation:new Date("5/6/2005")},
  //   {idProduit:3,nomProduit:"Tablette samsung ",prixProduit:900.123,dateCreation:new Date("02/20/2026")},
  // ];

  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL);
  }
  // static
  // ajouterProduit(produit:Produit){
  //   this.produits.push(produit);
  // }
  // dynamique with api
  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }

  supprimerProduit(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterProduit(id: number): Observable<Produit> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Produit>(url);
  }
modifier(prod :Produit) : Observable<Produit>
{
return this.http.put<Produit>(this.apiURL, prod, httpOptions);
}
}
