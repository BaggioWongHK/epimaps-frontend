import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { fadeIn } from './animations/fade.in';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fadeIn ]
})
export class AppComponent {
  changeBackgroundOpacity = false;
  constructor(private router: Router, private api: ApiService) {
    router.events.subscribe( (val) => {
      this.changeBackgroundOpacity = (val instanceof NavigationEnd && val.url === '/trending') ? true : false;
    } );
  }
}
