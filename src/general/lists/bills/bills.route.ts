import { BillsListComponent } from "./components/layout/bills-list/bills-list.component";
import { QuickBillComponent } from "./components/quick-bill/quick-bill.component";

export const routes: any = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: BillsListComponent
  },
  {
    path: 'quick-bill',
    component: QuickBillComponent
  }
];