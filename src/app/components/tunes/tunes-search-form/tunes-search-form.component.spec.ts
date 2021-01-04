import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunesSearchFormComponent } from './tunes-search-form.component';

describe('TunesSearchFormComponent', () => {
  let component: TunesSearchFormComponent;
  let fixture: ComponentFixture<TunesSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunesSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunesSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
