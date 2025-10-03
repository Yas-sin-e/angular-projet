import { Component } from '@angular/core';
import {Produit} from '../model/produits.model';
import { ProduitService } from '../services/produit.service';
import{CommonModule}from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.html',
  imports:[CommonModule,RouterLink],
})
export class Produits {
  produits:Produit[];// c'est un tableau de produits

  constructor(private produitservice:ProduitService){ {
  this.produits=produitservice.listeProduits();
  }}
  supprimerProduit(prod:Produit){
    let conf=confirm("Etes-vous sûr ?");
    if(conf){

      this.produitservice.supprimerProduit(prod);
    }
  }

}
