import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ProductsService } from './products/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';
  dato: string = "Valore Iniziale";
  dato2 = 1;
  numeroProdottiInOfferta: number = 0;
  randomNumber: number = 0;


  constructor(private service: ProductsService)
 {
    //const servizio = new ProductsService();
    this.numeroProdottiInOfferta = this.service.estraiProdottiInOfferta().length;
    this.randomNumber = this.service.getRandomNumber();
 }
  change(){
    this.dato = 'Valore sambiato';
    this.dato2 = 42;
  }
}
