import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleAssoPageRoutingModule } from './single-asso-routing.module';

import { SingleAssoPage } from './single-asso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleAssoPageRoutingModule
  ],
  declarations: [SingleAssoPage]
})
export class SingleAssoPageModule {}
