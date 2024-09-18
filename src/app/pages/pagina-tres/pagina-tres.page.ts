import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-tres',
  templateUrl: './pagina-tres.page.html',
  styleUrls: ['./pagina-tres.page.scss'],
})
export class PaginaTresPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("PaginaTres cargada");
  }

}
