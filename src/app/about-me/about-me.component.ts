import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor(private header:HeaderComponent) {

  }
  
  goToAnchor(anchor) {
    this.header.goDown(anchor);
  }
  
  openLink(link: string) {
    window.open(link);
  }
}
