import { Component, OnInit } from '@angular/core';
import Produit from "../../../entities/Produit";
import {ProduitService} from "../../../service/produit.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  produits: Array<Produit> =[];

  constructor(private produitService: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.produitService.getAll().subscribe(value => {
      this.produits = value;
    },error => {
      console.log("ERROR");
    })
  }

  OnDeleteProduct(id: number) {
    this.produitService.delete(id).subscribe(value => {
      console.log(value);
      this.ngOnInit();
    },error => {
      console.log("ERROR");
    })
  }

  OnEditProduct(id: number) {
    this.router.navigateByUrl(`/produits/${id}/edit`);
  }
}
