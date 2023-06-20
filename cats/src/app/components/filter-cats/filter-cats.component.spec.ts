import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCatsComponent } from './filter-cats.component';

describe('FilterCatsComponent', () => {
  let component: FilterCatsComponent;
  let fixture: ComponentFixture<FilterCatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterCatsComponent]
    });
    fixture = TestBed.createComponent(FilterCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
