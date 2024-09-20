import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { RangeCustomEvent, toastController } from '@ionic/core';

@Component({
  selector: 'app-pagina-tres',
  templateUrl: './pagina-tres.page.html',
  styleUrls: ['./pagina-tres.page.scss'],
})
export class PaginaTresPage {

  public buffer = 0.0; 
  public progress = 0.0; 
  public isToastOpen = false;

  constructor(private toastController: ToastController) { }

  pinFormatter(value: number) {
    return `${value}%`;
  }

  onIonChange(ev: Event) {
    const value = (ev as RangeCustomEvent).detail.value;
    this.progress = typeof value === 'number' ? (value/100) : value.lower;
    this.presentToast(ev);
  }

  async presentToast(ev: Event) {
    const toast = await this.toastController.create({
      message: 'Se movio la barra de progreso a un ' + (ev as RangeCustomEvent).detail.value + '%',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}
