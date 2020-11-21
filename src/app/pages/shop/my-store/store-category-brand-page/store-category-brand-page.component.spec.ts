import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCategoryBrandPageComponent } from './store-category-brand-page.component';

describe('StoreCategoryBrandPageComponent', () => {
  let component: StoreCategoryBrandPageComponent;
  let fixture: ComponentFixture<StoreCategoryBrandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCategoryBrandPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCategoryBrandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
