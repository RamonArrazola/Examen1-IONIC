import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaDosPage } from './pagina-dos.page';

describe('PaginaDosPage', () => {
  let component: PaginaDosPage;
  let fixture: ComponentFixture<PaginaDosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
