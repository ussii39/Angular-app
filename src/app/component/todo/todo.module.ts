import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, HttpClientModule],
})
export class TodoComponentModule {}
