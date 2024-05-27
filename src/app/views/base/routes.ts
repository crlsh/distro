import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },

   

 

 


      {
        path: 'tabs',
        loadComponent: () => import('./tabs/tabs.component').then(m => m.TabsComponent),
        data: {
          title: 'Tabs'
        }
      },
  
    ]
  }
];


