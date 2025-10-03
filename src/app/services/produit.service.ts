import { Injectable } from '@angular/core';
import { Produit } from '../model/produits.model';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'// derocateur
})
export class ProduitService {
  produits:Produit[];
  constructor(){
    this.produits=[
    {idProduit: 1,nomProduit: "pc asus",prixProduit:3000.600,dateCreation:new Date("02/10/2011")},
    {idProduit:2,nomProduit:"imprimante epson",prixProduit:450,dateCreation:new Date("5/6/2005")},
    {idProduit:3,nomProduit:"Tablette samsung ",prixProduit:900.123,dateCreation:new Date("02/20/2026")},
  ];
  }
  listeProduits():Produit[]{
    return this.produits;
  }
  ajouterProduit(produit:Produit){
    this.produits.push(produit);
  }
  supprimerProduit(prod:Produit){
    // methode 1:
    //supprimer le produit prod de tableau produits
    const index=this.produits.indexOf(prod,0);
    if(index>-1){
      this.produits.splice(index,1);
    }
  }
  //ou bien
  /*this.produits.forEach((cur,index)=>{
    if(prod.idProduit==cur.idProduit){
      this.produits.splice(index,1);
    }*/
   consulterProduit(id:number): Produit{
return   this.produits.find(p => p.idProduit == id)!;

}
  updateProduit(prod: Produit) {
    //chercher le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1); //supprimer l'ancien éléments
      this.produits.splice(index, 0, prod); // insérer le nouvel élément
    }
  }
}
