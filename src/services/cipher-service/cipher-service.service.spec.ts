import { TestBed } from '@angular/core/testing';

import { CipherServiceService } from './cipher-service.service';

describe('CipherServiceService', () => {
  let service: CipherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CipherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
