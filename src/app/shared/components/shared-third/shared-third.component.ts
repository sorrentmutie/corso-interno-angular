import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/products/models/product';


@Component({
  selector: 'app-shared-third',
  templateUrl: './shared-third.component.html',
  styleUrls: ['./shared-third.component.css']
})
export class SharedThirdComponent implements OnInit, OnChanges {

  @Input() terzoDato: Product | undefined = undefined;
  @Input() productName: string = '';

  constructor() { 
    
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Sono in third-component");
    console.log(changes);
  }

  ngOnInit(): void {
    /*
    const instanteIniziale = Date.now();
    let instante = instanteIniziale;
    while (instante - instanteIniziale < 5000) {
      instante = Date.now();
      console.log(instante);
    }
    console.log("loop terminato")
    */
  }


}
