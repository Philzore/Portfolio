import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  firstRow = [{
    img: 'javascript.svg',
    text: 'JavaScript'
  },
  {
    img: 'git.svg',
    text: 'GIT'
  },
  {
    img: 'scrum.svg',
    text: 'Scrum'
  },
  {
    img: 'material_design.svg',
    text: 'Material Design'
  }
  ];

  secondRow = [{
    img: 'angular.svg',
    text: 'Angular'
  },
  {
    img: 'firebase.svg',
    text: 'Firebase'
  },
  {
    img: 'api.svg',
    text: 'Rest-API'
  }
  ];

  thirdRow = [{
    img: 'typescript.svg',
    text: 'Typescript'
  },
  {
    img: 'css.svg',
    text: 'CSS'
  }
  ];

  fourthRow = [{
    img: 'html.svg',
    text: 'HTML'
  }
  ];
}
