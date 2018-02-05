import {Component, OnDestroy, OnInit} from '@angular/core';
import { fadeIn } from '../animations/fade.in';
import {CommunicationService} from '../communication/communication.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {TreeService} from '../tree.service';
import {NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  animations: [ fadeIn ]
})
export class TreeComponent implements OnInit, OnDestroy {
  componentTitles;

  constructor(private communication: CommunicationService,
              private route: ActivatedRoute,
              private treeService: TreeService,
              private router: Router) {
    //  prevent direct access to this page
    if (!this.treeService.currentTree.canonicalURL) {
      this.router.navigate(['/']);
    } else {
      this.componentTitles = this.treeService.getCurrentTree()['levels'][0]['data'];

      this.communication.currentEvent.subscribe(currentEvent => {
        // console.log(currentEvent); // source of irregularity - if this shows up twice in the console, this fires twice (refreshing page after home page redirection solves the problem)
        if (currentEvent === 'changeTitles') { // show subtree nodes
          if (this.treeService.getCurrentTree().treeIndicies &&
              this.treeService.getCurrentTree().treeIndicies.length > 0) {
            const currentChildren = this.treeService.currentTree.getChildrenAtLevel(this.treeService.currentTree.levels.length - 1);
            this.treeService.currentTree.extractData(currentChildren);
            this.componentTitles = this.treeService.currentTree.getCurrentLevel().data;
            // console.log(this.treeService.currentTree);
            // console.log('fired counter');
          }
        } else if (currentEvent.name === 'breadcrumbChangeTitles') { // move up tree based on selected breadcrumb level
          // console.log('emitted level', currentEvent.data);
          this.componentTitles = this.treeService.currentTree.levels[currentEvent.data].data;
        }
      });
    }
  }

  /**
   * @description When navigating away, the tree needs
   * to be reset.
   */
  ngOnDestroy() {
    this.treeService.resetTree();
    console.log(this.treeService.getCurrentTree());

    //  reload when going back to the homepage, this is a bugfix for doubly fired breadcrumb event
    this.router.events.subscribe(event => {
      // console.log('current url', this.router.url);
      if (event instanceof NavigationEnd && this.router.url === '/') {
        window.location.reload();
      }
    });
  }

  ngOnInit() {

  }
}
