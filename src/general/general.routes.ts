import { Routes } from '@angular/router';

export const learningRoutes: Routes = [
    {
        path: '',
        redirectTo: 'lists',
        pathMatch: 'full'
    },
    {
        path: 'lists',
        loadComponent:() => import('./general-lists/general-lists.component').then(m=>m.GeneralListsComponent),
    },
    {
        path: 'calculator',
        loadComponent:() => import('./lists/calculator/calculator.component').then(m=>m.CalculatorComponent),
    },
    {
        path: 'time-calculator',
        loadComponent:() => import('./lists/time-calculator/time-calculator.component').then(m=>m.TimeCalculatorComponent),
    },
    // {
    //     path: 'detail/:id',
    //     loadComponent:() => import('./detail/detail.component').then(m=>m.DetailComponent)
    // },
];
