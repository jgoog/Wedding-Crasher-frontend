import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  constructor() {
    console.log(environment.production); // Logs false for default environment
  }
  title = 'Welcome to Wedding Crasher';
}
