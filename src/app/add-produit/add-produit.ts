import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produits.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
  })
export class AddProduit {
  newProduit=new Produit();
  message:string="";
  constructor(private produitService:ProduitService){

  }


  addProduit(){
    //console.log(this.newProduit);
    //je fait l'injection de l'independace:
    this.produitService.ajouterProduit(this.newProduit);
    this.message="Produit " +this.newProduit.nomProduit+" ajouté avec succès";
    this.newProduit=new Produit();
  }
}
