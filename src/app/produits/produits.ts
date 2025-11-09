import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produits.model';
import { ProduitService } from '../services/produit.service';
import{CommonModule}from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.html',
  imports:[CommonModule,RouterLink],
})

export class Produits implements OnInit {
  produits!:Produit[];// c'est un tableau de produits
  constructor(private produitservice:ProduitService
    , router: Router
  ){

   }
ngOnInit(): void {
  this.chargerProduits();
}
chargerProduits(){
  this.produitservice.listeProduit().subscribe(prods => {
      //console.log(prods);
      this.produits = prods;
    });}

   supprimerProduit(p: Produit)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.produitservice.supprimerProduit(p.idProduit!).subscribe(() => {
        console.log("produit supprimé");
        // angular chnage_detaction 
        this.chargerProduits();

           });
    }

}
