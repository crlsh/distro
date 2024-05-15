import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { UserInterface } from '../../interfaces/user';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  currentUserSig = signal<UserInterface | undefined | null>(undefined);
  user$ = user(this.firebaseAuth);
  private router = inject(Router);
  register(
    email: string,
    username: string,
    password: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) =>
      updateProfile(response.user, { displayName: username })
    );

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((userCredential) => {
      const user = userCredential.user;
      const userWithUsername: UserInterface = {
        email: user.email || '', // Asignar el correo electrónico del usuario
        username: user.displayName || '', // Asignar el nombre de usuario (displayName) o una cadena vacía si es nulo
        // Otras propiedades...
      };
      this.currentUserSig.set(userWithUsername);
    });
    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {
      this.currentUserSig.set(null); // Limpiar el signal de usuario
      this.router.navigate(['/login']); // Redirigir al login
    });
    return from(promise);
  }
}
