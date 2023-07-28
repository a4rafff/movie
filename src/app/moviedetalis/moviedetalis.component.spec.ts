import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetalisComponent } from './moviedetalis.component';

describe('MoviedetalisComponent', () => {
  let component: MoviedetalisComponent;
  let fixture: ComponentFixture<MoviedetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviedetalisComponent]
    });
    fixture = TestBed.createComponent(MoviedetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
