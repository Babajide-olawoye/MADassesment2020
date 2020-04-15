import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecommendPagePage } from './recommend-page.page';

describe('RecommendPagePage', () => {
  let component: RecommendPagePage;
  let fixture: ComponentFixture<RecommendPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
