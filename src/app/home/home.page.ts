import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private flashlight: Flashlight) { }

  //Method i used int html code to turn switch on and off
  mylight() {
    this.flashlight.switchOn();
  }

  mylightOff() {
    this.flashlight.switchOff();
  }

}
