import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { addIcons } from 'ionicons';
import { heartOutline, shareOutline } from 'ionicons/icons';
import { IonList, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'; 

@Component({
  selector: 'app-pagina-dos',
  templateUrl: './pagina-dos.page.html',
  styleUrls: ['./pagina-dos.page.scss'],
})
export class PaginaDosPage implements OnInit {

  usuarios: Observable<any> = new Observable<any>();
  busqueda: string = '';
  carga : boolean = false;

  @ViewChild(IonList) Lista!: IonList;

  constructor(private dataService: DataService,
              private modalController: ModalController
  ) { 
    addIcons({
      'heart-outline': heartOutline,
      'share-outline': shareOutline
    });
  }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();

    setTimeout(() => {
      this.carga = true;
    }, 2000);
  }

  favorite(user: any){
    console.log(user + ' Agregado a Favoritos');
    this.Lista.closeSlidingItems();
  }

  share(user: any){
    console.log(user + ' Compartido');
    this.Lista.closeSlidingItems();
  }

  async onClick(item: any){
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        item: item
      }
    });
    await modal.present();
  }

  onSearchChange(event: any){
    this.busqueda = event.detail.value;
  }
}
