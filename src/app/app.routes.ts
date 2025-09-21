import { Routes } from '@angular/router';
import { Produit } from './produit/produit';
import { AddProduits } from './add-produits/add-produits';

export const routes: Routes = [
  {path :"produits",component:Produit},
  {path:"add_produit",component:AddProduits},
  {path:"",redirectTo:"produits",pathMatch:"full"}
];
