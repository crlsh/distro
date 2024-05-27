import { Component } from '@angular/core';
import { Product, OrderItem } from '../interfaces'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss'
})
export class ReservasComponent {
  pendingOrders: OrderItem[] = [];
  orderItems: OrderItem[] = [];

  removeOrderItem(index: number) {
    this.orderItems.splice(index, 1);
  }
  removePendingOrderItem(index: number) {
    this.pendingOrders.splice(index, 1);
  }
}
