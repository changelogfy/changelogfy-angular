import { TestBed } from '@angular/core/testing';

import { ChangelogfyService } from './changelogfy.service';

describe('ChangelogfyService', () => {
  let service: ChangelogfyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangelogfyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
