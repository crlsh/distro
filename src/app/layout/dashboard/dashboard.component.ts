import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';

import { IconDirective } from '@coreui/icons-angular';
import {
  ButtonCloseDirective,
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective, 
} from '@coreui/angular';

import { DefaultFooterComponent, DefaultHeaderComponent } from '../';
import { navItems } from '../_nav';
import { WasapComponent } from 'src/app/views/features/wasap/wasap.component';
import { PedidosComponent } from 'src/app/views/features/pedidos/pedidos.component';
import { PendientesComponent } from 'src/app/views/features/pendientes/pendientes.component';
import { ReservasComponent } from 'src/app/views/features/reservas/reservas.component';
import { ButtonDirective } from '@coreui/angular';
@Component({
  selector: 'app-dashboard',
  standalone: true,
 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',  
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    RouterLink,
    IconDirective,
    NgScrollbar,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    DefaultHeaderComponent,
    ShadowOnScrollDirective,
    ContainerComponent,
    RouterOutlet,
    DefaultFooterComponent,
    PedidosComponent,
    WasapComponent,
    PendientesComponent,
    ReservasComponent,
    ButtonDirective,


  ]
})
export class DashboardComponent {
  public navItems = navItems;
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


