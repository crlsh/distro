import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


interface Product {
  id: number;
  name: string;
  price: number;
}

interface OrderItem {
  product: Product;
  quantity: number;
  discount: number;
}

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule ],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {
  title = 'pedidos';
  products: Product[] = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 }
  ];

  selectedProduct: Product | null = null;
  quantity: number = 1;
  discount: number = 0;

  orderItems: OrderItem[] = [];
  pendingOrders: OrderItem[] = [];

  addToOrder() {
    if (this.selectedProduct) {
      const existingItem = this.orderItems.find(item => item.product.id === this.selectedProduct!.id);
      if (existingItem) {
        existingItem.quantity += this.quantity;
        existingItem.discount = this.discount;
      } else {
        this.orderItems.push({
          product: this.selectedProduct,
          quantity: this.quantity,
          discount: this.discount
        });
      }
      this.resetForm();
    }
  }

  resetForm() {
    this.selectedProduct = null;
    this.quantity = 1;
    this.discount = 0;
  }

  removeOrderItem(index: number) {
    this.orderItems.splice(index, 1);
  }

  closeOrder() {
    this.pendingOrders = [...this.pendingOrders, ...this.orderItems];
    this.orderItems = [];
  }

  removePendingOrderItem(index: number) {
    this.pendingOrders.splice(index, 1);
  }
}


