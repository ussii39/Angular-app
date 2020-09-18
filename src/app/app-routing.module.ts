import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountModule } from './account/account.module';
import { PlanComponent } from './components/plan/plan.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/plan.module').then((m) => m.PlanModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AccountModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
