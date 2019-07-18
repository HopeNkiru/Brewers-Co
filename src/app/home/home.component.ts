import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

// tslint:disable-next-line: no-inferrable-types
clickCounter = 0;
name = 'Successful!';

  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    const myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4,


    }
    return myClasses;

  }

}
