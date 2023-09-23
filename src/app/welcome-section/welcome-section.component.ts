import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent {

  constructor(private header:HeaderComponent) {}


  goToAnchor(id) {
    this.header.goDown(id);
  }
}
