import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'historia',
    loadComponent: () => import('./historia/historia.page').then( m => m.HistoriaPage)
  },
  {
    path: 'personagens',
    loadComponent: () => import('./personagens/personagens.page').then( m => m.PersonagensPage)
  },
  {
    path: 'sobremim',
    loadComponent: () => import('./sobremim/sobremim.page').then( m => m.SobremimPage)
  },
];
