import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberOdd = 0;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervelFired(lastNumber: number){
    console.log(lastNumber);
    this.numberOdd = lastNumber;
    if(lastNumber % 2 === 0 )
      this.evenNumbers.push(lastNumber);
    else 
      this.oddNumbers.push(lastNumber);
  }
}
