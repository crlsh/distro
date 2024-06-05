import { Injectable } from '@angular/core';

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

interface Pedido {
  items: PedidoItem[];
  estado: 'Pendiente de Envío' | 'Reservado';
}


@Injectable({
  providedIn: 'root'
})
export class PedidosStorageService {

  private pedidosTomados: Pedido[] = [];

  tomarPedido(pedido: Pedido) {
    this.pedidosTomados.push(pedido);
    console.log('Pedido tomado:', pedido);
  }

  obtenerPedidos() {
    return this.pedidosTomados;
  }
}