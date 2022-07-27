import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {
  @Input() prodotti: Product[] | undefined = undefined;
  @Output() emitEvent: EventEmitter<Product> = new EventEmitter();

  showDetails(selectedProduct: Product) {
    this.emitEvent.emit(selectedProduct);
  }
}
