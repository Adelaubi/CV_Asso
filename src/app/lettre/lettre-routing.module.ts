import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LettrePage } from './lettre.page';

const routes: Routes = [
  {
    path: '',
    component: LettrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LettrePageRoutingModule {}
