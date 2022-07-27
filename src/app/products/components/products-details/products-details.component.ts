import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {

  @Input() prodotto: Product | undefined = undefined;
  @Output() emitEvent: EventEmitter<boolean> = new EventEmitter();

  goBack() {
    this.emitEvent.emit(true);
  }

}

