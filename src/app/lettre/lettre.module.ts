import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LettrePageRoutingModule } from './lettre-routing.module';

import { LettrePage } from './lettre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LettrePageRoutingModule
  ],
  declarations: [LettrePage]
})
export class LettrePageModule {}
