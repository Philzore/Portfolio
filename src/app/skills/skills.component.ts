import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  isFrontend = true;
  screenWidth: number;
  resizeSubscription: Subscription;

  showFrontendRow1 = true ; showFrontendRow2 = true ; showFrontendRow3 = true ; showFrontendRow4 = true ;
  showBacktendRow1 = true ; showBacktendRow2 = true ; showBacktendRow3 = true ; showBacktendRow4 = true ;

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

  ngOnInit() {
    this.screenWidth = window.innerWidth;

    this.resizeSubscription = fromEvent(window, 'resize')
      .subscribe(() => {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 760 && this.screenWidth >= 585) {
          this.addIconFromFourthToThirdRow();
        } else if(this.screenWidth <= 585 && this.screenWidth >= 550) {
          this.addIconToFirstAndSecondRow();
        } else {
          this.setDefaultIconsToRow();
        }
      });
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  /**
   * when the screen is to small change some icons to the third row
   * 
   */
  addIconFromFourthToThirdRow() {
    this.thirdRowFrontend = [{ img: 'typescript.svg', text: 'Typescript' }, { img: 'css.svg', text: 'CSS' }, { img: 'html.svg', text: 'HTML' }];
    this.fourthRowFrontend = [];
    this.showFrontendRow4 = false ;
    this.thirdRowBackend = [{ img: 'Terminal.svg', text: 'Terminal' }, { img: 'Cloud.svg', text: 'Cloud' }, { img: 'Heroku.svg', text: 'Heroku' }];
    this.fourthRowBackend = [];
    this.showBacktendRow4 = false ;
  }

  addIconToFirstAndSecondRow() {
    this.firstRowFrontend = [{ img: 'css.svg', text: 'CSS' }, { img: 'html.svg', text: 'HTML' },{ img: 'javascript.svg', text: 'JavaScript' },{ img: 'git.svg', text: 'GIT' },{ img: 'scrum.svg', text: 'Scrum' }];
    this.secondRowFrontend = [{ img: 'typescript.svg', text: 'Typescript' },{ img: 'angular.svg', text: 'Angular' },{ img: 'firebase.svg', text: 'Firebase' },{ img: 'api.svg', text: 'Rest-API' },{ img: 'material_design.svg', text: 'Material Design' }];
    this.thirdRowFrontend = [] ;
    this.fourthRowFrontend = [] ;
    this.showFrontendRow3 = false ;
    this.showFrontendRow4 = false ;
    this.firstRowBackend = [{ img: 'Python.svg', text: 'Python' },{ img: 'Django.svg', text: 'Django' },{ img: 'PostgresSQL.svg', text: 'PostgresSQL' },{ img: 'SQL.svg', text: 'SQL' },{ img: 'Terminal.svg', text: 'Terminal' }];
    this.secondRowBackend = [{ img: 'Redis.svg', text: 'Redis' },{ img: 'Linux.svg', text: 'Linux' },{ img: 'Docker.svg', text: 'Docker' },{ img: 'Cloud.svg', text: 'Cloud' }, { img: 'Heroku.svg', text: 'Heroku' }];
    this.thirdRowBackend = [] ;
    this.fourthRowBackend = [] ;
    this.showBacktendRow3 = false ;
    this.showBacktendRow4 = false ;
  }

  /**
   * change back to init value
   * 
   */
  setDefaultIconsToRow() {
    this.firstRowFrontend = [{ img: 'javascript.svg', text: 'JavaScript' },{ img: 'git.svg', text: 'GIT' },{ img: 'scrum.svg', text: 'Scrum' },{ img: 'material_design.svg', text: 'Material Design' }];
    this.secondRowFrontend = [{ img: 'angular.svg', text: 'Angular' },{ img: 'firebase.svg', text: 'Firebase' },{ img: 'api.svg', text: 'Rest-API' }];
    this.thirdRowFrontend = [{ img: 'typescript.svg', text: 'Typescript' },{ img: 'css.svg', text: 'CSS' }];
    this.fourthRowFrontend = [{ img: 'html.svg', text: 'HTML' }];
    this.firstRowBackend = [{ img: 'Python.svg', text: 'Python' },{ img: 'Django.svg', text: 'Django' },{ img: 'PostgresSQL.svg', text: 'PostgresSQL' },{ img: 'SQL.svg', text: 'SQL' },];
    this.secondRowBackend = [{ img: 'Redis.svg', text: 'Redis' },{ img: 'Linux.svg', text: 'Linux' },{ img: 'Docker.svg', text: 'Docker' }];
    this.thirdRowBackend = [{ img: 'Terminal.svg', text: 'Terminal' },{ img: 'Cloud.svg', text: 'Cloud' }];
    this.fourthRowBackend = [{ img: 'Heroku.svg', text: 'Heroku' },];
    this.displayAllIconRows();
  }

  displayAllIconRows() {
    this.showFrontendRow1 = true ;
    this.showFrontendRow2 = true ;
    this.showFrontendRow3 = true ;
    this.showFrontendRow4 = true ;
    this.showBacktendRow1 = true ;
    this.showBacktendRow2 = true ;
    this.showBacktendRow3 = true ;
    this.showBacktendRow4 = true ;
  }

  goToAnchor(id) {
    this.header.goDown(id);
  }

  toggleIcons() {
    this.isFrontend = !this.isFrontend;
  }
}
