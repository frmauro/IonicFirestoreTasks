import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-taks-list',
  templateUrl: './taks-list.page.html',
  styleUrls: ['./taks-list.page.scss']
})
export class TaksListPage {
  tasks$: Observable<Task[]>;

  constructor(private taskService: TasksService) {}

  ionViewDidEnter(): void {
    this.tasks$ = this.taskService.getAll();
  }
}
