import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pagina-uno',
    loadChildren: () => import('./pages/pagina-uno/pagina-uno.module').then( m => m.PaginaUnoPageModule)
  },
  {
    path: 'pagina-dos',
    loadChildren: () => import('./pages/pagina-dos/pagina-dos.module').then( m => m.PaginaDosPageModule)
  },
  {
    path: 'pagina-tres',
    loadChildren: () => import('./pages/pagina-tres/pagina-tres.module').then( m => m.PaginaTresPageModule)
  },
  {
    path: '',
    redirectTo: 'pagina-uno',
    pathMatch: 'full'
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
