import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product, OrderItem } from '../interfaces'

@Component({
  selector: 'app-pendientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pendientes.component.html',
  styleUrl: './pendientes.component.scss'
})
export class PendientesComponent {

  pendingOrders: OrderItem[] = [];
  removePendingOrderItem(index: number) {
    this.pendingOrders.splice(index, 1);
  }
}
