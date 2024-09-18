import { Component} from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-uno',
  templateUrl: './pagina-uno.page.html',
  styleUrls: ['./pagina-uno.page.scss'],
})
export class PaginaUnoPage {

  data = [
    {
      name: 'Primary',
      position: 'primary',
      selected: false
    },
    {
      name: 'Secondary',
      position: 'secondary',
      selected: false
    },
    {
      name: 'Tertiary',
      position: 'tertiary',
      selected: false
    }
  ];

  constructor(private alertController: AlertController,
              private actionSheet: ActionSheetController) { 

              }

  async onClick () {
    const actionSheet = await this.actionSheet.create({
      header: 'Actions',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Mostrar Alert',
          icon: 'id-card-outline',
          handler: () => {
            this.Alert();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async Alert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          id: 'name1-id',
          placeholder: 'Nombre'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Nombre de Usuario'
        },
        {
          name: 'name3',
          type: 'number',
          min: 0,
          max: 122,
          id: 'name3-id',
          placeholder: 'Edad'
        },
        {
          name: 'name4',
          type: 'textarea',
          id: 'name4-id',
          placeholder: 'Un poco acerca de ti'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'red'
        },
        {
          text: 'Ok',
          cssClass: 'primary',
          handler: (data) => {
            console.log('Ok, data: ', data);
            console.log(this.data);
          }
        }
      ]  
    });

    await alert.present();
  }

}
