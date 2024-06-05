import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { InputComponent } from '../input/input.component';
import { PedidosStorageService } from '../../../services/pedidos-storage/pedidos-storage.service';
import { Cliente, Producto, Pedido, PedidoItem} from 'src/app/interfaces/app';


@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, InputComponent],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent {
  clientes: Cliente[] = [
    { id: 1, cuit: '20304050607', apellido: 'Perez', nombre: 'Juan' },
    { id: 2, cuit: '20304050608', apellido: 'Gomez', nombre: 'Ana' },
  ];

  productos: Producto[] = [
    { id: 1, codigo: 'P001', nombre: 'Producto 1', precio: 100 },
    { id: 2, codigo: 'P002', nombre: 'Producto 2', precio: 200 },
  ];

  clientesFiltrados: Cliente[] = [];
  productosFiltrados: Producto[] = [];

  clienteSeleccionado: Cliente | null = null;
  pedido: PedidoItem[] = [];

  constructor(
    private router: Router,
    private pedidosStorageService: PedidosStorageService
  ) {}

  buscarCliente(query: string) {
    this.clientesFiltrados = this.clientes.filter(
      (cliente) =>
        cliente.cuit.includes(query) ||
        cliente.apellido.toLowerCase().includes(query.toLowerCase())
    );
  }

  seleccionarCliente(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
    this.clientesFiltrados = [];
  }

  buscarProducto(query: string) {
    this.productosFiltrados = this.productos.filter(
      (producto) =>
        producto.codigo.includes(query) ||
        producto.nombre.toLowerCase().includes(query.toLowerCase())
    );
  }

  agregarProducto(producto: Producto) {
    this.pedido.push({
      producto,
      precio: producto.precio,
      descuento: 0,
      cantidad: 1,
      importe: producto.precio,
    });
    this.productosFiltrados = [];
  }

  eliminarProducto(index: number) {
    this.pedido.splice(index, 1);
  }

  guardarPedido() {
    if (!this.clienteSeleccionado) {
      console.error('No se ha seleccionado ningún cliente');
      return;
    }

    const pedidoConEstado: Pedido = {
      id: new Date().getTime(), // Generar un ID único
      cliente: this.clienteSeleccionado,
      importe: this.pedido.reduce((total, item) => total + item.importe, 0),
      items: this.pedido,
      estado: 'Pendiente de Envío'
    };

    this.pedidosStorageService.tomarPedido(pedidoConEstado);
    // console.log('Pedido guardado', pedidoConEstado);
    this.pedido = [];
    this.clienteSeleccionado = null;
    this.navigateToInicio();
  }

  obtenerValorEvento(event: Event): string {
    const target = event.target as HTMLInputElement;
    return target ? target.value : '';
  }

  navigateToInicio() {
    this.router.navigate(['/inicio']);
  }
}
