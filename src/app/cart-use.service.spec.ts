import { TestBed } from '@angular/core/testing';

import { CartUseService } from './cart-use.service';

describe('CartUseService', () => {
  let service: CartUseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartUseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
