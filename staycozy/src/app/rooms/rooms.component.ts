import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stay-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Prime Hotel";

  constructor() { }

  ngOnInit(): void {
    
  }
}
