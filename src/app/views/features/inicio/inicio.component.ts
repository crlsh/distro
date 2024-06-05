import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonDirective } from '@coreui/angular';
import { InputComponent } from '../input/input.component';
import { PedidosStorageService } from 'src/app/services/pedidos-storage/pedidos-storage.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ButtonDirective, InputComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {

  pendingOrdersCount = 0;
  reservedOrdersCount = 0;

  constructor(private router: Router, private pedidosStorage: PedidosStorageService) {}

  ngOnInit() {
    this.pedidosStorage.obtenerPedidosTomados().subscribe(pedidos => {
      this.pendingOrdersCount = pedidos.filter(pedido => pedido.estado === 'Pendiente de Envío').length;
    });

    this.pedidosStorage.obtenerPedidosReservados().subscribe(pedidos => {
      this.reservedOrdersCount = pedidos.length;
    });
  }

  navigateToPedidos() {
    this.router.navigate(['/pedidos']);
  }

  navigateToPendientes() {
    this.router.navigate(['/pendientes']);
  }

  navigateToReservados() {
    this.router.navigate(['/reservados']);
  }

  navigateToInicio() {
    this.router.navigate(['/inicio']); 
  }

  onScrollbarUpdate($event: any) {}
}
