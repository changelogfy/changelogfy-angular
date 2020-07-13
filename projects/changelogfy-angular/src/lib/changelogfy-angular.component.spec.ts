import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelogfyComponent } from './changelogfy-angular.component';

describe('ChangelogfyComponent', () => {
  let component: ChangelogfyComponent;
  let fixture: ComponentFixture<ChangelogfyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangelogfyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelogfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
