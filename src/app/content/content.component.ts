import { Component, OnInit, Input } from '@angular/core';

import { DisplayComponent} from './../display/display.component';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  firstName: String;
  lastName: String;
  title: String;
  displayMessage: String;
  constructor() { }

  OnInit() {
    this.firstName = 'Srinivas';
    this.lastName = 'Raghavan';
  }
getDetails(fName, lName) {
  this.title = fName + ' ' + lName;
  this.displayMessage = this.title;
}


}
