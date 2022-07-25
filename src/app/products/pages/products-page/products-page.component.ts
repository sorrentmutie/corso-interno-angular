import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent  {

  prodottiInOfferta: Product[] = [];
  prodottiDaRiordinare: Product[] = [];

  constructor() {
      this.prodottiInOfferta = this.estraiProdottiInOfferta();
      this.prodottiDaRiordinare = this.estraiProdottiDaRiordinare();
  }

  estraiProdottiInOfferta(): Product[] {
    return   [
      { id :1,
        name: "Frigorifero",
        price: 1000,
        code: 100,
        description: "descrizione 1",
        releaseDate : new Date(),
        image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      },
      { id :2,
        name: "Frigorifero Speciale",
        price: 2000,
        code: 200,
        description: "descrizione 2",
        releaseDate : new Date(),
        image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      }
    ];
  }

  estraiProdottiDaRiordinare(): Product[] {
    return   [
      { id :3,
        name: "ZZZFrigorifero",
        price: 1000,
        code: 100,
        description: "descrizione 1",
        releaseDate : new Date(),
        image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      },
      { id :4,
        name: "ZZZFrigorifero Speciale",
        price: 2000,
        code: 200,
        description: "descrizione 2",
        releaseDate : new Date(),
        image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      }
    ];

  }


}
