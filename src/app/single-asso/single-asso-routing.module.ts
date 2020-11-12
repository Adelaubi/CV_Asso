import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleAssoPage } from './single-asso.page';

const routes: Routes = [
  {
    path: '',
    component: SingleAssoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleAssoPageRoutingModule {}
