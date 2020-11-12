import { Component, OnInit } from '@angular/core';
import {SingleAssoPage} from '../single-asso/single-asso.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-asso',
  templateUrl: './asso.page.html',
  styleUrls: ['./asso.page.scss'],
})
export class AssoPage implements OnInit {
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async onLoadAsso(name: string, lien: string, description: string) {
    const modal = await this.modalCtrl.create({
      component: SingleAssoPage,
      componentProps: {
        nameAsso: name,
        lienImage: lien,
        Description: description
      }
    });
    return await modal.present();
  }
}
