import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PlanModule } from './components/plan.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './component/todo/todo.component';
import { PlanComponent } from './components/plan/plan.component';
import { PlanDetailComponent } from './components/plan-detail/plan-detail.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { TodoService } from './service/todo.service';

@NgModule({
  declarations: [AppComponent, TodoComponent, PlanComponent, TodoItemComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'todo',
        component: TodoComponent,
      },
      {
        path: 'plan',
        component: PlanComponent,
      },
      {
        path: 'todo/:id',
        component: PlanDetailComponent,
      },
    ]),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
