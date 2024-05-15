import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verifica si el usuario está autenticado
  const isLoggedIn = authService.currentUserSig() !== undefined && authService.currentUserSig() !== null;
  console.log('Estado de autenticación:', isLoggedIn);
  
  if (isLoggedIn) {
    // El usuario está autenticado, permite la navegación
    return true;
  } else {
    // Redirige al login si no está autenticado
    router.navigate(['/login']);
    return false;
  }
};