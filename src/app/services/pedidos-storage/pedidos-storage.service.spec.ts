import { TestBed } from '@angular/core/testing';

import { PedidosStorageService } from './pedidos-storage.service';

describe('PedidosStorageService', () => {
  let service: PedidosStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
