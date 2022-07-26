import { Component } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent {

  ordiniInConsegna: Order[] = [];
  ordiniDaRitirare: Order[] = [];
  ordineSelezionato: Order | undefined = undefined;

  constructor() {
    this.ordiniInConsegna = this.estraiOrdiniInConsegna();
    this.ordiniDaRitirare = this.estraiOrdiniDaRitirare();
  }

  estraiOrdiniInConsegna(): Order[] {
    return [
      {
        id: 1,
        name: "Ordine1",
        price: 800,
        code: 100,
        supplier: "Fornitore1",
        purchaseDate: new Date(),
        deliveryDate: new Date(),
        image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      },
      {
        id: 2,
        name: "Ordine2",
        price: 800,
        code: 200,
        supplier: "Fornitore2",
        purchaseDate: new Date(),
        deliveryDate: new Date(),
        image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      }

    ]
  }

  estraiOrdiniDaRitirare(): Order[] {
    return [
      {
        id: 3,
        name: "Ordine3",
        price: 800,
        code: 300,
        supplier: "Fornitore3",
        purchaseDate: new Date(),
        deliveryDate: new Date(),
        image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      },
      {
        id: 2,
        name: "Ordine4",
        price: 800,
        code: 400,
        supplier: "Fornitore4",
        purchaseDate: new Date(),
        deliveryDate: new Date(),
        image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      }
    ]
  }

  dettaglioInConsegna(payload: Order): void {
     this.ordineSelezionato = payload;
  }

  dettaglioDaRitirare(payload: Order) : void {
    alert(payload.name);
  }

  mostraTabella(payload: boolean) {
    this.ordineSelezionato = undefined;
  }

}
