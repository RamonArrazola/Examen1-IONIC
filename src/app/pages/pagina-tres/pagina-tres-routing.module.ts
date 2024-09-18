import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaTresPage } from './pagina-tres.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaTresPageRoutingModule {}
