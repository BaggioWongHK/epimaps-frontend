import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { showBreadcrumbs } from '../animations/show.breadcrumbs';
import { CommunicationService } from '../communication/communication.service';
import {TreeService} from "../tree.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [ showBreadcrumbs ]
})
export class NavbarComponent implements OnInit {
  showBreadcrumbs = false;
  showPageSwitcher = false;
  showBreadcrumbsToggle = false;
  showTrending = true;
  showNavbarLogo = false;
  showSpinner = false;

  breadcrumbLevels;

  constructor(private router: Router,
              private communication: CommunicationService,
              private treeService: TreeService) {
    router.events.subscribe( (state) => {
      this.communication.emitEvent({name: 'hideSpinner'}); // hide spinner whenever route changes

      //  logic to determine which parts of the navbar to show
      this.showPageSwitcher = (state instanceof NavigationEnd && state.url === '/tree') ? true : false;
      this.showBreadcrumbsToggle = (state instanceof NavigationEnd && state.url === '/tree') ? true : false;
      this.showTrending = (state instanceof NavigationEnd && state.url === '/trending') ? false : true;
      this.showNavbarLogo = (state instanceof NavigationEnd && (state.url === '/' || state.urlAfterRedirects === '/')) ? false : true; // take into account redirects
    } );

    this.communication.currentEvent.subscribe((currentEvent) => {
      this.showSpinner = (currentEvent.name === 'showSpinner') ? true : false;
    });
  }

  /**
   * @description Changes tree level to specified level.
   * All the nodes under that level will be displayed.
   * @param {number} level
   */
  goToBreadcrumb(level: number) {
    const numLevels = this.treeService.getCurrentTree().levels.length;
    // console.log('level clicked', level);
    if (level < numLevels - 1) { // if there are three levels, you can't remove level 2, e.g.
      this.communication.emitEvent({name: 'breadcrumbChangeTitles', data: level});
      // console.log(this.treeService.getCurrentTree());
      this.treeService.currentTree.removeLevels(level);
    }
  }

  ngOnInit() {
    this.breadcrumbLevels = this.treeService.currentTree.levels;
    // console.log(this.breadcrumbLevels);
  }

  /**
   * @description This toggles the breadcrumbs bar.
   */
  toggleHideBreadcrumbs() {
    this.showBreadcrumbs = !this.showBreadcrumbs;
  }
}
