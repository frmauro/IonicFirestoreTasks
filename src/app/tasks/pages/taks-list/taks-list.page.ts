import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable, of } from 'rxjs';

import { Task } from '../../models/task.model';
import { TasksService } from './../../services/tasks.service';

@Component({
  selector: 'app-taks-list',
  templateUrl: './taks-list.page.html',
  styleUrls: ['./taks-list.page.scss']
})
export class TaksListPage implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private navCtrl: NavController, private taskService: TasksService) {}

  ngOnInit(): void {
    //this.tasks$ = this.taskService.getAll();
  }

  onUpdate(task: Task): void {
    this.navCtrl.navigateForward(`/tasks/edit/${task.id}`);
  }

  //ionViewDidEnter(): void {
  //this.tasks$ = this.taskService.getAll();
  //}
}
