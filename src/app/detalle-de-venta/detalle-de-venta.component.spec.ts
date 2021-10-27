
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetalleDeVentaComponent } from './detalle-de-venta.component';

describe('DetalleDeVentaComponent', () => {
  let component: DetalleDeVentaComponent;
  let fixture: ComponentFixture<DetalleDeVentaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDeVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
