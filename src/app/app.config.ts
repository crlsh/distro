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
  apiKey: "AIzaSyCM-WuXYmaZU0AJQk7jVXyrSt1eMGIC0ps",
  authDomain: "demoapplog.firebaseapp.com",
  projectId: "demoapplog",
  storageBucket: "demoapplog.appspot.com",
  messagingSenderId: "333531493406",
  appId: "1:333531493406:web:2be93d73101e7f569fea0f",
  measurementId: "G-77CC9T9J1N"
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
