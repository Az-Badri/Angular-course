import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-beginner';
  myId: string = "AIDISHNIK";
  boolVar: boolean = false;
  greeting: string = '';

  onClick(event : Event){
    this.greeting = event.type;
    console.log(event);
  }
  referenceMethod(value : string){
    console.log(value);
  }
}
