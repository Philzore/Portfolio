import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('myLinks') myLinks:ElementRef;

  constructor(private viewportScroller: ViewportScroller) {

  }

  goDown(id) {
    this.viewportScroller.scrollToAnchor(id);
    this.myLinks.nativeElement.style.display = "none";
  }

  openMenu() {
    if (this.myLinks.nativeElement.style.display === "flex") {
      this.myLinks.nativeElement.style.display = "none";
    } else {
      this.myLinks.nativeElement.style.display = "flex";
    }
  }
}
