import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'create',
        loadChildren: './pages/task-save/task-save.module#TaskSavePageModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './pages/task-save/task-save.module#TaskSavePageModule'
      },
      {
        path: '',
        loadChildren: './pages/taks-list/taks-list.module#TaksListPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}
