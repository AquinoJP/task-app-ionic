import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'modal-list',
    loadComponent: () => import('./components/modal-list/modal-list.page').then( m => m.ModalListPage)
  },
  {
    path: 'form-agg-acti',
    loadComponent: () => import('./components/form-agg-acti/form-agg-acti.page').then( m => m.FormAggActiPage)
  },
];
