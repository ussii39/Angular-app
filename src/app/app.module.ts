import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { PlanModule } from './components/plan.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './component/todo/todo.component';
import { PlanComponent } from './components/plan/plan.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/plan.module').then((m) => m.PlanModule),
  },
];

@NgModule({
  declarations: [AppComponent, TodoComponent, PlanComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
