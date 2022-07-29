import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay} from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private randomNumber: number = 0;
  constructor() {
    this.randomNumber = Math.random();
    console.log('Sono nel costruttore del servizio: ' +  Date.now())
  }

  getRandomNumber() : number {
    return this.randomNumber;
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

  estraiProdottiInOffertaAsObservable() : Observable<Product[]>{
      return of(this.estraiProdottiInOfferta()).pipe(delay(5000));
  }

  estraiProdottiDaRiordinareAsObservable() : Observable<Product[]>{
    return of(this.estraiProdottiDaRiordinare());
}


}
