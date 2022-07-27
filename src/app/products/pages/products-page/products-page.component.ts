import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent  {

  prodottiInOfferta: Product[] = [];
  prodottiDaRiordinare: Product[] = [];
  randomNumber: number = 0;

  constructor(private service: ProductsService) {
      // const service2 = new ProductsService();
      this.randomNumber = this.service.getRandomNumber();
      this.prodottiInOfferta = service.estraiProdottiInOfferta();
      this.prodottiDaRiordinare = service.estraiProdottiDaRiordinare();
  }





}
