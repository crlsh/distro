
import { ProductStorageService } from '../../../services/produt-storage/product-storage.service';

import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnDestroy {
  productos: any[] = [];
  productosFiltered: any[] = [];
  displayedProducts: any[] = [];
  selectedProduct: any;
  searchTerm: string = '';
  currentPage: number = 0;
  pageSize: number = 10;
  productosSubscription: Subscription | null = null;

  @Output() selectedProductChange = new EventEmitter<any>();

  constructor(private productStorageService: ProductStorageService) { }

  ngOnInit(): void {
    this.productosSubscription = this.productStorageService.getProductos().subscribe((data: any[]) => {
      this.productos = data;
    });
  }

  ngOnDestroy(): void {
    this.productosSubscription?.unsubscribe();
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.currentPage = 0;
    if (this.searchTerm) {
      this.productosFiltered = this.productos.filter(producto =>
        producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        producto.codigo.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.displayedProducts = [];
      this.loadMoreProducts();
    } else {
      this.productosFiltered = [];
      this.displayedProducts = [];
    }
  }

  loadMoreProducts() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    if (start < this.productosFiltered.length) {
      this.displayedProducts = [...this.displayedProducts, ...this.productosFiltered.slice(start, end)];
      this.currentPage++;
    }
  }

  onScroll(event: any) {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight && this.displayedProducts.length < this.productosFiltered.length) {
      this.loadMoreProducts();
    }
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
    this.searchTerm = ''; // Resetea el campo de búsqueda
    this.productosFiltered = [];
    this.displayedProducts = [];
    this.selectedProductChange.emit(product);
  }
}