import { ListComponent } from "./list/list.component";
import { QuizeTestComponent } from "./quize-test/quize-test.component";

export const routes: any = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
    {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'quiz-play/:id',
        component: QuizeTestComponent
      }
];