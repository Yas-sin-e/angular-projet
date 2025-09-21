import { Component } from '@angular/core';

@Component({
  selector: 'app-add-produits',
  imports: [],
  templateUrl: './add-produits.html',
})
export class AddProduits {
  produits :string[];

  constructor(){
    this.produits=["PC Asus", "Imprimante Epson", "Tablette Samsung"]

    }
  }

