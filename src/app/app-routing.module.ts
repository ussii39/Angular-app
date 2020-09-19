import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountModule } from './account/account.module';
import { TodoComponent } from './component/todo/todo.component';
import { PlanDetailComponent } from './components/plan-detail/plan-detail.component';
import { PlanComponent } from './components/plan/plan.component';

const routes: Routes = [
  {
    path: 'todo',
    children: [{ path: 'my-home', component: TodoComponent }],
  },
  {
    path: 'plan',
    component: PlanComponent,
  },
  {
    path: 'plan-detail',
    component: PlanDetailComponent,
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./component/todo/todo.module').then((m) => m.TodoComponentModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AccountModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
