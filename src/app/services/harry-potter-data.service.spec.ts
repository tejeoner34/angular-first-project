import { TestBed } from '@angular/core/testing';

import { HarryPotterDataService } from './harry-potter-data.service';

describe('HarryPotterDataService', () => {
  let service: HarryPotterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarryPotterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
