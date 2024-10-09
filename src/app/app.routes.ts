import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'learning',
        pathMatch: 'full'
    },
    {
        path: 'learning',
        loadChildren:() => import('../learning/learning.routes').then(routes => routes.learningRoutes)
    }
];