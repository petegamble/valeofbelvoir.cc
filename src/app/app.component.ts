import { Component } from '@angular/core';
import { EventService } from './events/event.service';

@Component({
  selector: 'vbcc-app',
  template: `
              <div>
                <nav class='navbar navbar-default'>
                  <a class='navbar-brand'>VBCC</a>
                  <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/events']">Event List</a></li>
                  </ul>
                </nav>
              </div>
              <div class='container'>
                <router-outlet></router-outlet>
              </div>
              `      
})
export class AppComponent  { 
  name: string = 'VBCC'; 
}
