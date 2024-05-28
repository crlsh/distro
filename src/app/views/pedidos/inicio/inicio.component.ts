import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
 
  pendingOrdersCount = 3; // Ejemplo: número de pedidos pendientes
  reservedOrdersCount = 2; // Ejemplo: número de pedidos reservados

  constructor(private router: Router) {}

  navigateToPedidos() {
    this.router.navigate(['/pedidos']);
  }
  onScrollbarUpdate($event: any) {
    // if ($event.verticalUsed) {
    // console.log('verticalUsed', $event.verticalUsed);
    // }
  }
}
