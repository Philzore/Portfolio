import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  @ViewChild('project1') project1:ElementRef;

  projects = [{
    name: 'Join',
    img: '/assets/projects/Join_default.png',
    description: 'Task manager inspired by the Kanban System.Create and organize tasks using drag and dropfunctions, assign users and categories.',
    languages: 'HTML | CSS | JavaScript' ,
    githubLink: 'https://github.com/Philzore/join',
    liveLink: 'https://join.philippmoessl.de/templates/html/login.html'
  },
  {
    name : 'El Pollo Loco',
    img : '/assets/projects/Pollo_loco_default.png',
    description: 'Jump,run and throw game based on object,oriented approach.Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    languages: 'HTML | CSS | JavaScript' ,
    githubLink: 'https://github.com/Philzore/ell_pollo_loco',
    liveLink: 'https://elpollolocco.philippmoessl.de/index.html'
  },
  {
    name : 'Portfolio',
    img : '/assets/projects/Simple_CRM_default.png',
    description: 'My Portfolio build with Angular',
    languages:'HTML | SCSS | TypeScript | Angular' ,
    githubLink: 'https://github.com/Philzore/philippmoessl.de',
    liveLink: 'https://philippmoessl.de/'
  },
  {
    name : 'Pokedex',
    img : '/assets/projects/Pokedex_default.png',
    description: 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.',
    languages: 'HTML | CSS | JavaScript | API' ,
    githubLink: 'https://github.com/Philzore/Pokedex',
    liveLink: 'https://pokedex.philippmoessl.de/index.html'
  }
];

openLink (link:string) {
  window.open(link) ;

  if (this.projects[0].languages.includes('API')) {
    console.log('yes') ;
  } else {
    console.log('no') ;
  }
 
}

filterProject(language:string) {
  for (let i = 0; i < this.projects.length; i++) {
    const singleProject = this.projects[i];
    if (!singleProject.languages.includes(language) && language !== 'all') {
      document.getElementById(`project${i}`).style.display = 'none';
    } else {
      document.getElementById(`project${i}`).style.display = 'flex';
    }
  }
}
  

}
