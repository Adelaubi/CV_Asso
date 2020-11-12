import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LettrePage } from './lettre.page';

describe('LettrePage', () => {
  let component: LettrePage;
  let fixture: ComponentFixture<LettrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LettrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
