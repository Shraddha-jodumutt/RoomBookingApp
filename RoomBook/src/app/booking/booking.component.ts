import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  roomCount = 1;
  adultCount = 1;
  childrenCount = 0;
  totalPeople = 0;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.totalPeople = this.adultCount + this.childrenCount;
    // if (this.totalPeople < 4)
    //   this.roomCount = 1
    if (this.totalPeople > 5 && this.totalPeople <= 8) {
      this.roomCount = 2;
    }

    if (this.totalPeople > 8 && this.totalPeople <= 12) {
      this.roomCount = 3;
    }

    if (this.totalPeople > 12 && this.totalPeople <= 16) {
      this.roomCount = 4;
    }

    if (this.totalPeople > 16 && this.totalPeople <= 20) {
      this.roomCount = 5;
    }

    if (this.roomCount > this.adultCount && this.adultCount < 5) {
      this.adultCount = this.roomCount;
    }
  }

  roomCountAction(actionClicked) {
    if (actionClicked === 'increment') {
      if (this.roomCount < 5) {
        this.roomCount++;
      }
    }

    if (actionClicked === 'decrement' && this.roomCount > 1) {
      this.roomCount--;
    }

    console.log(this.adultCount);
  }

  adultCountAction(actionClicked) {
    if (actionClicked === 'increment') {
      if (this.totalPeople < 20) {
        this.adultCount++;
      }
    }

    if (actionClicked === 'decrement' && this.adultCount > 1) {
      this.adultCount--;
    }
  }

  childCountAction(actionClicked) {
    if (actionClicked === 'increment') {
      if (this.adultCount < 20 && this.totalPeople < 20) {
        this.childrenCount++;
      }
    }

    if (actionClicked === 'decrement' && this.childrenCount > 1) {
      this.childrenCount--;
    }
  }

}
