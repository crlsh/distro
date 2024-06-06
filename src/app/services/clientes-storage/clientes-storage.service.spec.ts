import { TestBed } from '@angular/core/testing';

import { ClientesStorageService } from './clientes-storage.service';

describe('ClientesStorageService', () => {
  let service: ClientesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
