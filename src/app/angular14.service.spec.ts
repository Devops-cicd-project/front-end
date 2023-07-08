import { TestBed } from '@angular/core/testing';

import { Angular14Service } from './angular14.service';

describe('Angular14Service', () => {
  let service: Angular14Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Angular14Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
