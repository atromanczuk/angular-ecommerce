
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TerminarCompraComponent } from './terminar-compra.component';

describe('TerminarCompraComponent', () => {
  let component: TerminarCompraComponent;
  let fixture: ComponentFixture<TerminarCompraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminarCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
