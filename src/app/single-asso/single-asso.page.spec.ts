import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleAssoPage } from './single-asso.page';

describe('SingleAssoPage', () => {
  let component: SingleAssoPage;
  let fixture: ComponentFixture<SingleAssoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAssoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleAssoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
