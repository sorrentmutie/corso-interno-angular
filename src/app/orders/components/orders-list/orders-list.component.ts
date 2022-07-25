import { Component, Input } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  @Input() ordini: Order[] | undefined = undefined;

}
