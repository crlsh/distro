import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { PedidosStorageService } from '../../../services/pedidos-storage/pedidos-storage.service';
import { Pedido } from 'src/app/interfaces/app';

@Component({
  selector: 'app-pendientes',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.scss']
})
export class PendientesComponent implements OnInit {
  pedidos: Pedido[] = [];
  pedidosFiltrados: Pedido[] = [];
  pedidoSeleccionado: Pedido | null = null;

  constructor(
    private router: Router,
    private pedidosStorageService: PedidosStorageService
  ) {}

  ngOnInit() {
    this.pedidosStorageService.obtenerPedidosTomados().subscribe(pedidos => {
      this.pedidos = pedidos;
      this.pedidosFiltrados = this.pedidos;
    });
  }

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
    this.pedidosFiltrados = this.pedidos;
    this.pedidoSeleccionado = null;
  }

  enviarPedido(id: number) {
    console.log('Pedido enviado', id);
    this.eliminarPedido(id);
  }

  reservarPedido(pedido: Pedido | null) {
    if (pedido) {
      pedido.estado = 'Reservado';  // Cambiar el estado del pedido a 'Reservado'
      this.pedidosStorageService.reservarPedido(pedido);  // Mover el pedido al servicio
      console.log('Pedido reservado', pedido);
      this.eliminarPedido(pedido.id);
    }
  }

  navigateToInicio() {
    this.router.navigate(['/inicio']); 
  }
}
