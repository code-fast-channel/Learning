import { Routes } from '@angular/router';

export const learningRoutes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        loadComponent:() => import('./list/list.component').then(m=>m.ListComponent),
    },
    {
        path: 'detail/:id',
        loadComponent:() => import('./detail/detail.component').then(m=>m.DetailComponent)
    },
];
