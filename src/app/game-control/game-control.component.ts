import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervelFired = new EventEmitter<number>();
  lastNumber = 0;
  interval;
  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervelFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000);
  }

  onPause(){
    clearInterval(this.interval);
  }

}
