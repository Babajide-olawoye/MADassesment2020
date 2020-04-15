import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypePagePage } from './type-page.page';

describe('TypePagePage', () => {
  let component: TypePagePage;
  let fixture: ComponentFixture<TypePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
