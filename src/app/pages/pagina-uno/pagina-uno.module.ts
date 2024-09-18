import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaUnoPageRoutingModule } from './pagina-uno-routing.module';

import { PaginaUnoPage } from './pagina-uno.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaUnoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaginaUnoPage]
})
export class PaginaUnoPageModule {}
