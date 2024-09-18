import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaTresPage } from './pagina-tres.page';

describe('PaginaTresPage', () => {
  let component: PaginaTresPage;
  let fixture: ComponentFixture<PaginaTresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaTresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
