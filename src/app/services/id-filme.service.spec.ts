import { TestBed } from '@angular/core/testing';

import { IdFilmeService } from './id-filme.service';

describe('IdFilmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdFilmeService = TestBed.get(IdFilmeService);
    expect(service).toBeTruthy();
  });
});
