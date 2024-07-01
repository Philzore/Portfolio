import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  isFrontend = true;

  firstRowFrontend = [
    { img: 'javascript.svg', text: 'JavaScript' },
    { img: 'git.svg', text: 'GIT' },
    { img: 'scrum.svg', text: 'Scrum' },
    { img: 'material_design.svg', text: 'Material Design' }
  ];

  secondRowFrontend = [
    { img: 'angular.svg', text: 'Angular' },
    { img: 'firebase.svg', text: 'Firebase' },
    { img: 'api.svg', text: 'Rest-API' }
  ];

  thirdRowFrontend = [
    { img: 'typescript.svg', text: 'Typescript' },
    { img: 'css.svg', text: 'CSS' }
  ];

  fourthRowFrontend = [
    { img: 'html.svg', text: 'HTML' }
  ];

  firstRowBackend = [
    { img: 'Python.svg', text: 'Python' },
    { img: 'Django.svg', text: 'Django' },
    { img: 'PostgresSQL.svg', text: 'PostgresSQL' },
    { img: 'SQL.svg', text: 'SQL' },
  ];

  secondRowBackend = [
    { img: 'Redis.svg', text: 'Redis' },
    { img: 'Linux.svg', text: 'Linux' },
    { img: 'Docker.svg', text: 'Docker' }
  ];

  thirdRowBackend = [
    { img: 'Terminal.svg', text: 'Terminal' },
    { img: 'Cloud.svg', text: 'Cloud' }
  ];

  fourthRowBackend = [
    { img: 'Heroku.svg', text: 'Heroku' },
  ];

  constructor(private header: HeaderComponent) { }

  goToAnchor(id) {
    this.header.goDown(id);
  }

  toggleIcons() {
    this.isFrontend = !this.isFrontend;
  }
}
