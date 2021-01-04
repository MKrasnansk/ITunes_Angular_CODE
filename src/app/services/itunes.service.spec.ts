import { TestBed } from '@angular/core/testing';

import { iTunesService } from './itunes.service';

describe('iTunesService', () => {
  let service: iTunesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(iTunesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
