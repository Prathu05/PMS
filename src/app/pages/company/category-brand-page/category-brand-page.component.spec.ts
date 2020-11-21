import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBrandPageComponent } from './category-brand-page.component';

describe('CategoryBrandPageComponent', () => {
  let component: CategoryBrandPageComponent;
  let fixture: ComponentFixture<CategoryBrandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBrandPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBrandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
