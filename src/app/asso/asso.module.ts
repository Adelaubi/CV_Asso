import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssoPageRoutingModule } from './asso-routing.module';

import { AssoPage } from './asso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssoPageRoutingModule
  ],
  declarations: [AssoPage]
})
export class AssoPageModule {}
