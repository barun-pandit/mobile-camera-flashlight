import { Component } from '@angular/core';

import { Platform, NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    public isAvailable: boolean;
    public isOn: boolean;
    constructor(private platform: Platform, private navCtrl: NavController, private flashlight: Flashlight) {
        platform.ready().then(() => {
            if(this.flashlight.available) {
                this.isAvailable = true;
            } else {
                this.isAvailable = false;
            }
        });
    }

    on(event) {
        if(this.isAvailable) {
            this.flashlight.switchOn();
            this.isOn = true;
        }
    }

    off(event) {
        if(this.isAvailable && this.isOn) {
            this.flashlight.switchOff();
            this.isOn = false;
        }
    }
}
