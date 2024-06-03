import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonDirective } from '@coreui/angular';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ButtonDirective, InputComponent],
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

  navigateToPendientes() {
    this.router.navigate(['/pendientes']);
  }

  navigateToReservados() {
    this.router.navigate(['/reservados']);
  }

  navigateToInicio() {
    this.router.navigate(['/inicio']); 
  }
  
  onScrollbarUpdate($event: any) {
    // if ($event.verticalUsed) {
    // console.log('verticalUsed', $event.verticalUsed);
    // }
  }
}
