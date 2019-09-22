import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from './../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { TaksListPage } from './taks-list.page';

const routes: Routes = [
  {
    path: '',
    component: TaksListPage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [TaksListPage]
})
export class TaksListPageModule {}
