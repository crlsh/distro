import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pedido } from '../../interfaces/app';

@Injectable({
  providedIn: 'root'
})
export class PedidosStorageService {

  // Lista y BehaviorSubject para pedidos tomados
  private pedidosTomadosSubject = new BehaviorSubject<Pedido[]>([]);
  private pedidosTomados: Pedido[] = [];

  // Lista y BehaviorSubject para pedidos reservados
  private pedidosReservadosSubject = new BehaviorSubject<Pedido[]>([]);
  private pedidosReservados: Pedido[] = [];

  // Métodos para manejar pedidos tomados
  tomarPedido(pedido: Pedido) {
    this.pedidosTomados.push(pedido);
    this.pedidosTomadosSubject.next(this.pedidosTomados);
    console.log('Pedido tomado:', pedido);
  }

  obtenerPedidosTomados(): Observable<Pedido[]> {
    return this.pedidosTomadosSubject.asObservable();
  }

  // Métodos para manejar pedidos reservados
  reservarPedido(pedido: Pedido) {
    this.pedidosReservados.push(pedido);
    this.pedidosReservadosSubject.next(this.pedidosReservados);
    console.log('Pedido reservado:', pedido);
  }

  obtenerPedidosReservados(): Observable<Pedido[]> {
    return this.pedidosReservadosSubject.asObservable();
  }
}
