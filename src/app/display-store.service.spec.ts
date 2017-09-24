import { TestBed, inject } from '@angular/core/testing';

import { DisplayStoreService } from './display-store.service';

describe('DisplayStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayStoreService]
    });
  });

  it('should ...', inject([DisplayStoreService], (service: DisplayStoreService) => {
    expect(service).toBeTruthy();
  }));
});
