import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProductStorageService } from '../../../services/produt-storage/product-storage.service';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  productos: any[] = [];
  productosFiltered: any[] = [];
  selectedProduct: any;
  searchProduct$ = new Subject<string>();

  constructor(private productStorageService: ProductStorageService) { }

  ngOnInit(): void {
    this.productStorageService.getProductos().subscribe((data: any[]) => {
      this.productos = data;
    });
    this.setupSearch();
  }

  setupSearch() {
    this.searchProduct$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] :
        this.productos.filter(producto =>
          producto.nombre.toLowerCase().includes(term.toLowerCase()) ||
          producto.codigo.toLowerCase().includes(term.toLowerCase())
        ).slice(0, 5))
    ).subscribe(results => this.productosFiltered = results);
  }
}
