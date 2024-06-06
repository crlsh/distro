import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesStorageService {

  private clientes: any[] =
  [
    {
      "id": 1,
      "cuit": "20-12345678-9",
      "apellido": "González",
      "nombre": "Juan"
    },
    {
      "id": 2,
      "cuit": "27-87654321-4",
      "apellido": "Rodríguez",
      "nombre": "María"
    },
    {
      "id": 3,
      "cuit": "23-11223344-5",
      "apellido": "Martínez",
      "nombre": "Carlos"
    },
    {
      "id": 4,
      "cuit": "24-55667788-1",
      "apellido": "Pérez",
      "nombre": "Ana"
    },
    {
      "id": 5,
      "cuit": "26-99887766-2",
      "apellido": "Gómez",
      "nombre": "Luis"
    },
    {
      "id": 6,
      "cuit": "25-22334455-6",
      "apellido": "Fernández",
      "nombre": "Laura"
    },
    {
      "id": 7,
      "cuit": "22-66778899-3",
      "apellido": "López",
      "nombre": "José"
    },
    {
      "id": 8,
      "cuit": "21-33445566-7",
      "apellido": "Díaz",
      "nombre": "Marta"
    },
    {
      "id": 9,
      "cuit": "28-44556677-8",
      "apellido": "Sánchez",
      "nombre": "Jorge"
    },
    {
      "id": 10,
      "cuit": "29-55667788-9",
      "apellido": "Ramírez",
      "nombre": "Lucía"
    }
  ]
  

  constructor() { }

  private clientesSubject = new BehaviorSubject<any[]>(this.clientes);

  getProductos(): Observable<any[]> {
    return this.clientesSubject.asObservable();
  }
}


