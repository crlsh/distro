import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

interface Cliente {
  id: number;
  cuit: string;
  apellido: string;
  nombre: string;
}

interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  precio: number;
}

interface PedidoItem {
  producto: Producto;
  precio: number;
  descuento: number;
  cantidad: number;
}

interface Pedido {
  id: number;
  cliente: Cliente;
  importe: number;
  items: PedidoItem[];
}
@Component({
  selector: 'app-pendientes',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './pendientes.component.html',
  styleUrl: './pendientes.component.scss'
})



export class PendientesComponent {

  pedidos: Pedido[] = [
    {
      id: 1,
      cliente: { id: 1, cuit: '20304050607', apellido: 'Perez', nombre: 'Juan' },
      importe: 150,
      items: [
        { producto: { id: 1, codigo: 'P001', nombre: 'Producto 1', precio: 100 }, precio: 100, descuento: 0, cantidad: 1 },
        { producto: { id: 2, codigo: 'P002', nombre: 'Producto 2', precio: 50 }, precio: 50, descuento: 0, cantidad: 1 }
      ]
    },
    {
      id: 2,
      cliente: { id: 1, cuit: '23454050607', apellido: 'Sadia', nombre: 'Juan' },
      importe: 1500,
      items: [
        { producto: { id: 1, codigo: 'P001', nombre: 'Producto 1', precio: 100 }, precio: 100, descuento: 0, cantidad: 1 },
        { producto: { id: 2, codigo: 'P002', nombre: 'Producto 2', precio: 50 }, precio: 50, descuento: 0, cantidad: 1 },
        { producto: { id: 2, codigo: 'P002', nombre: 'Producto 3', precio: 150 }, precio: 50, descuento: 0, cantidad: 10 }
      ]
    },
    {
      id: 3,
      cliente: { id: 2, cuit: '20304050608', apellido: 'Gomez', nombre: 'Ana' },
      importe: 200,
      items: [
        { producto: { id: 2, codigo: 'P002', nombre: 'Producto 2', precio: 200 }, precio: 200, descuento: 0, cantidad: 1 }
      ]
    }
  ];

  pedidosReservados: Pedido[] = [];
  pedidosFiltrados: Pedido[] = this.pedidos;
  pedidoSeleccionado: Pedido | null = null;

  constructor(private router: Router) {}

  buscarPedido(event: Event) {
    const input = event.target as HTMLInputElement;
    const query = input.value.toLowerCase();
    this.pedidosFiltrados = this.pedidos.filter(pedido =>
      pedido.cliente.apellido.toLowerCase().includes(query)
    );
  }

  seleccionarPedido(pedido: Pedido) {
    this.pedidoSeleccionado = pedido;
  }

  deseleccionarPedido() {
    this.pedidoSeleccionado = null;
  }

  editarPedido() {
    console.log('Editando pedido', this.pedidoSeleccionado);
  }

  eliminarPedido(id: number) {
    this.pedidos = this.pedidos.filter(pedido => pedido.id !== id);
    this.pedidoSeleccionado = null;
  }

  enviarPedido(id: number) {
    console.log('Pedido enviado', id);
    this.eliminarPedido(id);
  }

  reservarPedido(pedido: Pedido) {
    this.pedidosReservados.push(pedido);
    console.log('Pedido reservado', pedido);
    this.eliminarPedido(pedido.id);
  }

  navigateToInicio() {
    this.router.navigate(['/inicio']); 
  }
}