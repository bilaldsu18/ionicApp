import { Component } from '@angular/core';

/**
 * Generated class for the SrcPagesAboutUsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'src-pages-about-us',
  templateUrl: 'src-pages-about-us.html'
})
export class SrcPagesAboutUsComponent {

  text: string;

  constructor() {
    console.log('Hello SrcPagesAboutUsComponent Component');
    this.text = 'Hello World';
  }

}
