import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'plan',
    loadChildren: () => import('./plan.module').then((m) => m.PlanModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule],
})
export class PlanModule {}
