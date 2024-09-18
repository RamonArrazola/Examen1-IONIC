import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-uno',
  templateUrl: './pagina-uno.page.html',
  styleUrls: ['./pagina-uno.page.scss'],
})
export class PaginaUnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("PaginaUno cargada");
  }

}
