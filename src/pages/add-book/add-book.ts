import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-book',
  templateUrl: 'add-book.html',
})
export class AddBookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("AddBookPage");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBookPage');
  }

}
