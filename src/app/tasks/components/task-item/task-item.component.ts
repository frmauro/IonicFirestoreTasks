import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() done: EventEmitter<Task>;
  @Output() update: EventEmitter<Task>;
  @Output() delete: EventEmitter<Task>;
}
