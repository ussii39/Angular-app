import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';

const routes: Routes = [
  // {
  //   path: 'plan',
  //   component: PlanComponent,
  // },
  // {
  //   path: 'plan-detail',
  //   component: PlanComponent,
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./plan.module').then((m) => m.PlanModule),
  // },
];

@NgModule({
  declarations: [PlanDetailComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class PlanModule {}
