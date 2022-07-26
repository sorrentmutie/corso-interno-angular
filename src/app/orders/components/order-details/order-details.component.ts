import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent  {
  @Input() ordine: Order | undefined = undefined;
  @Output() emitEvent: EventEmitter<boolean> = new EventEmitter();

  goBack() {
    this.emitEvent.emit(true);
  }

}
