import { Component, OnInit } from '@angular/core';
import { Rooms } from './rooms';

@Component({
  selector: 'stay-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Prime Hotel";
  numberofRooms = 10;
  hiderooms = false;
  rooms:Rooms = {
    // availableRooms: 10,
    // bookedRooms: 10,
    // totalRooms: 5
  }

  

  constructor() { }

  ngOnInit(): void {}

  toggle = () => {
    this.hiderooms = !this.hiderooms;
  }
}
