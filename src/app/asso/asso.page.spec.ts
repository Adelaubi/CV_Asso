import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssoPage } from './asso.page';

describe('AssoPage', () => {
  let component: AssoPage;
  let fixture: ComponentFixture<AssoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
