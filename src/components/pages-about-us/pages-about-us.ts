import { Component } from '@angular/core';

/**
 * Generated class for the PagesAboutUsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pages-about-us',
  templateUrl: 'pages-about-us.html'
})
export class PagesAboutUsComponent {

  text: string;

  constructor() {
    console.log('Hello PagesAboutUsComponent Component');
    this.text = 'Hello World';
  }

}
