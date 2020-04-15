import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharPagePage } from './char-page.page';

describe('CharPagePage', () => {
  let component: CharPagePage;
  let fixture: ComponentFixture<CharPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
