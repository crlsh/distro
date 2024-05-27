import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';

import { DropdownModule, SidebarModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';


const firebaseConfig = {
  apiKey: "AIzaSyCFKU5ivJGC_YUOXMRlhRBzOjOuMyV8Zqc",
  authDomain: "distro-641cc.firebaseapp.com",
  projectId: "distro-641cc",
  storageBucket: "distro-641cc.appspot.com",
  messagingSenderId: "1050764509504",
  appId: "1:1050764509504:web:467b3b41aaae2b367a3aa5"
};

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      withHashLocation()
    ),
    importProvidersFrom(SidebarModule, DropdownModule),
    IconSetService,
    provideAnimations()
  ], 
  
};
