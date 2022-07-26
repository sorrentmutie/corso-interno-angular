import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  @Input() ordini: Order[] | undefined = undefined;
  @Output() emitEvent: EventEmitter<Order> = new EventEmitter();

  showDetails(selectedOrder: Order) {
    this.emitEvent.emit(selectedOrder);
  }


}
