import { TestBed } from '@angular/core/testing';

import { DropServiceService } from './drop-service.service';

describe('DropServiceService', () => {
  let service: DropServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
