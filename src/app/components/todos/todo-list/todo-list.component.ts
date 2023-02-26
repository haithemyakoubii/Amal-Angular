import { Component, OnInit } from '@angular/core';
import Todo from "../../../entities/Todo";
import {CalculService} from "../../../service/calcul.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todolist: Array<Todo> = [];
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  constructor(private calculService: CalculService) { }

  ngOnInit(): void {
    this.todolist=[
      {"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", "completed": true}
    ];

  }

  OnCountCompleted() {
    let countTodoCompleted = this.calculService.getNumberOf(this.todolist,"completed",true);
    alert(`${countTodoCompleted} todo completed par rapport au ${this.todolist.length} todos`)
  }
}
