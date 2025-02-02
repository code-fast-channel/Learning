import { Routes } from '@angular/router';

export const learningRoutes: Routes = [
    {
        path: '',
        redirectTo: 'learning-list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        loadComponent:() => import('./list/list.component').then(m=>m.ListComponent),
    },
    {
        path: 'learning-list',
        loadComponent:() => import('./learning-lists/learning-lists.component').then(m=>m.LearningListsComponent),
    },
    {
        path: 'detail/:id',
        loadComponent:() => import('./detail/detail.component').then(m=>m.DetailComponent)
    },
];
