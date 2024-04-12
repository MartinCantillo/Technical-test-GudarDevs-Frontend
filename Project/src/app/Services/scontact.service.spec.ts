import { TestBed } from '@angular/core/testing';

import { SContactService } from './scontact.service';

describe('SContactService', () => {
  let service: SContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
