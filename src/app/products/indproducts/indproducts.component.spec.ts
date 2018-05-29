import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndproductsComponent } from './indproducts.component';

describe('IndproductsComponent', () => {
  let component: IndproductsComponent;
  let fixture: ComponentFixture<IndproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
