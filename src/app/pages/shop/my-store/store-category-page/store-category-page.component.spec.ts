import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCategoryPageComponent } from './store-category-page.component';

describe('StoreCategoryPageComponent', () => {
  let component: StoreCategoryPageComponent;
  let fixture: ComponentFixture<StoreCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
