import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavPagePage } from './fav-page.page';

describe('FavPagePage', () => {
  let component: FavPagePage;
  let fixture: ComponentFixture<FavPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
