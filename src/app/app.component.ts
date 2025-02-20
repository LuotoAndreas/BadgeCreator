import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgesComponent } from './badges/badges.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BadgesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'angularBadgeTesting';
}
