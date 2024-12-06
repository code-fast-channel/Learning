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
    {
        path: 'quiz',
        loadChildren:() => import('./lists/quiz/quiz.route').then(routes => routes.routes)
    },
    {
        path: 'chat',
        loadComponent:() => import('./lists/chat/chat/chat.component').then(m=>m.ChatComponent)
    },
    {
        path: 'games',
        loadChildren:() => import('./lists/games/games.route').then(routes => routes.routes)
    },
];
