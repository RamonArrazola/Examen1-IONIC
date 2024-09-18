import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaTresPageRoutingModule } from './pagina-tres-routing.module';

import { PaginaTresPage } from './pagina-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaTresPageRoutingModule
  ],
  declarations: [PaginaTresPage]
})
export class PaginaTresPageModule {}
