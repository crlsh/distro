import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { InputComponent } from '../input/input.component';

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
  importe: number;
}

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, InputComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {
  clientes: Cliente[] = [
    { id: 1, cuit: '20304050607', apellido: 'Perez', nombre: 'Juan' },
    { id: 2, cuit: '20304050608', apellido: 'Gomez', nombre: 'Ana' },
    // Agrega más clientes aquí
  ];

  productos: Producto[] = [
    { id: 1, codigo: 'P001', nombre: 'Producto 1', precio: 100 },
    { id: 2, codigo: 'P002', nombre: 'Producto 2', precio: 200 },
    // Agrega más productos aquí
  ];

  clientesFiltrados: Cliente[] = [];
  productosFiltrados: Producto[] = [];

  clienteSeleccionado: Cliente | null = null;
  pedido: PedidoItem[] = [];

  buscarCliente(query: string) {
    this.clientesFiltrados = this.clientes.filter(cliente =>
      cliente.cuit.includes(query) || cliente.apellido.toLowerCase().includes(query.toLowerCase())
    );
  }

  constructor(private router: Router) {}
  
  seleccionarCliente(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
    this.clientesFiltrados = [];
  }

  buscarProducto(query: string) {
    this.productosFiltrados = this.productos.filter(producto =>
      producto.codigo.includes(query) || producto.nombre.toLowerCase().includes(query.toLowerCase())
    );
  }

  agregarProducto(producto: Producto) {
    this.pedido.push({ producto, precio: producto.precio, descuento: 0, cantidad: 1, importe: 1 });
    this.productosFiltrados = [];
  }

  eliminarProducto(index: number) {
    this.pedido.splice(index, 1);
  }

  guardarPedido() {
    console.log('Pedido guardado', this.pedido);
    // Inicializar un nuevo pedido en blanco
    this.pedido = [];
  }

  obtenerValorEvento(event: Event): string {
    const target = event.target as HTMLInputElement;
    return target ? target.value : '';
  }

  navigateToInicio() {
    this.router.navigate(['/inicio']); 
  }
}
