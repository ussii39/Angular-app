import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss'],
})
export class PlanDetailComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {}

  ngOnInit(): void {}
}
