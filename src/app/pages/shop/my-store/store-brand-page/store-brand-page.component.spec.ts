import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBrandPageComponent } from './store-brand-page.component';

describe('StoreBrandPageComponent', () => {
  let component: StoreBrandPageComponent;
  let fixture: ComponentFixture<StoreBrandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreBrandPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBrandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
