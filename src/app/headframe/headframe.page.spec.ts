import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeadframePage } from './headframe.page';

describe('HeadframePage', () => {
  let component: HeadframePage;
  let fixture: ComponentFixture<HeadframePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadframePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeadframePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
