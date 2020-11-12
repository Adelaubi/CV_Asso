import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-single-asso',
  templateUrl: './single-asso.page.html',
  styleUrls: ['./single-asso.page.scss'],
})
export class SingleAssoPage implements OnInit {
  @Input() nameAsso: string;
  @Input() lienImage: string;
  @Input() Description: string;

  constructor() { }

  ngOnInit() {
  }

}
