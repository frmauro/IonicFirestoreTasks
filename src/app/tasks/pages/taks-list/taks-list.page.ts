import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-taks-list',
  templateUrl: './taks-list.page.html',
  styleUrls: ['./taks-list.page.scss']
})
export class TaksListPage implements OnInit {
  tasks$: Observable<Task[]>;

  constructor() {}

  ngOnInit(): void {
    this.tasks$ = of([
      { id: 'fd8g7df8g', title: 'Aprender Ionic', done: false },
      { id: 'fd8g778df', title: 'Aprender Firestore', done: false }
    ]);
  }
}
