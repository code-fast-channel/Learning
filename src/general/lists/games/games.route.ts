import { BingoComponent } from "./components/bingo/bingo.component";
import { GamesListComponent } from "./components/layout/games-list/games-list.component";
import { TicTacToeComponent } from "./components/tic-tac-toe/tic-tac-toe.component";

export const routes: any = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
    {
        path: 'list',
        component: GamesListComponent
      },
    {
        path: 'bingo',
        component: BingoComponent
      },
      {
        path: 'tic-tac-toe',
        component: TicTacToeComponent
      }
];