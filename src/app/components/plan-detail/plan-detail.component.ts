import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/service/todo.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss'],
})
export class PlanDetailComponent implements OnInit {
  @Input() todo: Todo;

  private selectedTodo: Todo;

  todoId;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.todoId = id;
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   let id = parseInt(params.get('id'));
    //   this.todoId = id;
    this.route.paramMap
      .pipe(
        switchMap((param: ParamMap) => {
          return this.todoService.getTodo(+param.get('id'));
        })
      )
      .subscribe((todo) => {
        this.todo = todo;
      });
  }

  goPrevious() {
    let previousId = this.todo.id - 1;
    this.router.navigate(['/todo', previousId]);
  }

  goNext() {
    let previousId = this.todo.id + 1;
    this.router.navigate(['/todo', previousId]);
  }
  onSelete(todo: Todo) {
    // this.router.navigate(['/todo', todo.id]);
    this.selectedTodo = todo;
  }
}
