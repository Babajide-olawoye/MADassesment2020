import { TestBed } from '@angular/core/testing';

import { AnimeShowService } from './anime-show.service';

describe('AnimeShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimeShowService = TestBed.get(AnimeShowService);
    expect(service).toBeTruthy();
  });
});
