import { Component, OnInit } from '@angular/core';
import Produit from "../../../entities/Produit";
import {ProduitService} from "../../../service/produit.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  id: number =0;
  MODE: string = "ADD_MODE";
  produit: Produit = {
    brand: "",
    category: "",
    description: "",
    discountPercentage: 0,
    images: [],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: "",
    title: "",
    id:0};

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.paramMap.has("id")) {
      this.id = Number.parseInt("" + this.activatedRoute.snapshot.paramMap.get("id"));

      if(this.id != 0) {
        this.MODE = "EDIT_MODE"
        this.produitService.getById(this.id).subscribe(value => {
          this.produit = value;
        },error => {
          console.log(error);
        });
      }
    }
  }

  OnEditProduct(value: Produit) {
    this.produitService.edit(this.id,this.produit).subscribe(value => {
      this.produit = value;
      this.router.navigateByUrl("/produits");
    },error => {
      console.log(error);
    });
  }

  OnAddProduct(produit: Produit) {
    console.log(produit);
    this.produitService.add(this.produit).subscribe(value => {
      console.log(value);
      this.router.navigateByUrl("/produits");
    },error => {
      console.log(error);
    });

  }
}
