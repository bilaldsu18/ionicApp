import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddBookPage } from '../add-book/add-book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }



  move() {
    this.navCtrl.push(AddBookPage);
  }
}
