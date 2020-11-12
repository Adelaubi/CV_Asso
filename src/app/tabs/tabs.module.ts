import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'asso',
        loadChildren: '../asso/asso.module#AssoPageModule'
      },
      {
        path: 'profil',
        loadChildren: '../profil/profil.module#ProfilPageModule'
      },
      {
        path: 'lettre',
        loadChildren: '../lettre/lettre.module#LettrePageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/profil'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
