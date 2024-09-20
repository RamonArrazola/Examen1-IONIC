import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() item: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log('Modal recibió ' + this.item );
  }

  onClick(){
    this.modalController.dismiss();
  }

}
