import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaUnoPage } from './pagina-uno.page';

describe('PaginaUnoPage', () => {
  let component: PaginaUnoPage;
  let fixture: ComponentFixture<PaginaUnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
