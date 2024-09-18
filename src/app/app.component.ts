import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  componentes: Observable<Componente[]> = new Observable<Componente[]>();
  type: string = 'push';

  constructor(private dataService:DataService) {}

  ngOnInit() {
   this.componentes = this.dataService.getMenu();
 }
}
