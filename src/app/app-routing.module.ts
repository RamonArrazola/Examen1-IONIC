import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pagina-uno',
    loadChildren: () => import('./pages/pagina-uno/pagina-uno.module').then( m => m.PaginaUnoPageModule)
  },
  {
    path: '',
    redirectTo: 'pagina-uno',
    pathMatch: 'full'
  },
  {
    path: 'pagina-dos',
    loadChildren: () => import('./pages/pagina-dos/pagina-dos.module').then( m => m.PaginaDosPageModule)
  },
  {
    path: 'pagina-tres',
    loadChildren: () => import('./pages/pagina-tres/pagina-tres.module').then( m => m.PaginaTresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
