import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() titulo: string = '';

  constructor(private menu: MenuController) { }

  onClick() {
    this.menu.toggle();
  }

}