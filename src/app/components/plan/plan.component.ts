import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {}

  ngOnInit(): void {}
}
