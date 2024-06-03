import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { PedidosComponent } from './views/features/pedidos/pedidos.component';
import { InicioComponent } from './views/features/inicio/inicio.component';
import { PendientesComponent } from './views/features/pendientes/pendientes.component';
import { ReservasComponent } from './views/features/reservas/reservas.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        component: InicioComponent,
        data: {
          title: 'Inicio'
        }
      },
      {
        path: 'pedidos',
        component: PedidosComponent,
        data: {
          title: 'Pedidos'
        }
      },
      {
        path: 'pendientes',
        component: PendientesComponent,
        data: {
          title: 'Pendientes'
        }
      },
  
      {
        path: 'reservados',
        component: ReservasComponent,
        data: {
          title: 'Reservados'
        }
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },





      {
        path: 'pages',
        loadChildren: () => import('./views/core/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/core/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/core/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/core/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/core/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
