
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetalleDeProductoComponent } from './detalle-de-producto.component';

describe('DetalleDeProductoComponent', () => {
  let component: DetalleDeProductoComponent;
  let fixture: ComponentFixture<DetalleDeProductoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDeProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDeProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
