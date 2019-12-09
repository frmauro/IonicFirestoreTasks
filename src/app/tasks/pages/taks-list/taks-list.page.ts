import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Task } from '../../models/task.model';
import { OverlayService } from './../../../core/services/overlay.service';
import { TasksService } from './../../services/tasks.service';

@Component({
  selector: 'app-taks-list',
  templateUrl: './taks-list.page.html',
  styleUrls: ['./taks-list.page.scss']
})
export class TaksListPage {
  tasks$: Observable<Task[]>;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private taskService: TasksService
  ) {}

  //async ngOnInit(): Promise<void> {
  //this.tasks$ = this.taskService.getAll();
  //}

  onUpdate(task: Task): void {
    this.navCtrl.navigateForward(`/tasks/edit/${task.id}`);
  }

  async onDelete(task: Task): Promise<void> {
    await this.overlayService.alert({
      message: `Do you really want to delete the task: "${task.title}"?`,
      buttons: [
        {
          text: 'Yes',
          handler: async () => {
            await this.taskService.delete(task);
            await this.overlayService.toast({
              message: `Task: "${task.title}" deleted!`
            });
          }
        },
        'No'
      ]
    });
  }

  async onDone(task: Task): Promise<void> {
    const taskToUpdate = { ...task, done: !task.done };
    await this.taskService.update(taskToUpdate);
    await this.overlayService.toast({
      message: `Task "${task.title}" ${taskToUpdate.done ? 'completed' : 'updated'}!`
    });
  }

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.tasks$ = this.taskService.getAll();
    this.tasks$.pipe(take(1)).subscribe(tasks => loading.dismiss());
  }
}
