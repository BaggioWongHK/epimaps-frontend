import {Component, HostListener, OnInit} from '@angular/core';
import { fadeIn } from '../animations/fade.in';
import {TreeService} from '../tree.service';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {HTTPResponse} from '../api.service';
import {CommunicationService} from '../communication/communication.service';

declare var $: any;

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
  animations: [ fadeIn ]
})
export class TrendingComponent implements OnInit {
  static readonly MAX_TAGS = 50;
  tags = [];

  occupiedDOMRects = []; // all the occupied DOMRects for ONE document size (cleared when resized)
  searchValid: boolean;
  canClick = true; // only one HTTP request at a time (can't click on multiple tags)
  errorMessage: string;
  currentTag: string;
  currentQuery: string;

  constructor(private router: Router,
              private api: ApiService,
              private treeService: TreeService,
              private communication: CommunicationService) { }

  @HostListener('window:resize')
  clearPreviousDOMRects() {
    this.occupiedDOMRects.length = 0;
  }

  /**
   * @description Shows spinner, gets trending items
   * and then hides spinner.
   */
  ngOnInit() {
    this.communication.emitEvent({name: 'showSpinner'});
    this.api.getTrendingItems().subscribe((response: HTTPResponse) => {
      response.data.forEach((item, index) => {
        if (index < TrendingComponent.MAX_TAGS) { this.tags.push(item); }
      });
      this.communication.emitEvent({name: 'hideSpinner'});
    });
  }

  /**
   * @description This sets the current search term -
   * this helps us regulate user click activity (multiple
   * searches are not permitted until the first is
   * completed).
   * @param {string} tag
   */
  setCurrentTag(tag: string) {
    this.currentTag = tag;
  }

  /**
   * @description This processes the search in the same
   * way search is processed on the front page.
   * @param {string} query
   */
  doSearch(query: string) {
    if (!this.canClick) {
      console.log('You\'ve already clicked on a tag!');
      this.errorMessage = 'Please wait for a moment, you\'ve already clicked on a tag!';
    }

    this._validateSearch(query);
    //  if search is valid
    if (this.searchValid && this.canClick) {
      this.errorMessage = undefined;
      this.currentQuery = query;
      this.communication.emitEvent({name: 'showSpinner'});
      this.canClick = false;
      //  if corresponding Wikipedia article exists
      this.api._getCanonicalURL(query).subscribe((response) => {
        if (!response.error) {
          this.api.articleExistsSA(response.data).subscribe((existsResponse) => {
            if (existsResponse.data) {
              //  set URL, tree, extract root level data and navigate to the tree page
              this.treeService.currentTree.setCanonicalURL(response.data);
              this.api.getTreesSA(response.data).subscribe( (treesResponse) => {

                if (!treesResponse.error) {
                  if (treesResponse.data.length === 0) {
                    this.errorMessage = 'Oops, it seems like there are no trees for this topic.';
                    this.communication.emitEvent({name: 'hideSpinner'});
                    this.canClick = true;
                  } else {
                    this.treeService.currentTree.setTree(treesResponse.data);

                    if (this.treeService.currentTree.extractDataL0() === -1) {
                      this.errorMessage = 'There has been an error processing the tree.';
                      this.communication.emitEvent({name: 'hideSpinner'});
                      this.canClick = true;
                    } else {
                      console.log(this.treeService.getCurrentTree());
                      this.communication.emitEvent({name: 'hideSpinner'});
                      this.canClick = true;
                      this.router.navigate(['/tree']);
                    }
                  }
                }
              });
            }

          });
        } else { // data error
          this.communication.emitEvent({name: 'hideSpinner'});
          this.errorMessage = response.error;
          this.canClick = true;
          console.log(response.error);
        }
      }); // server error
    }
  }

  /**
   * @description This validates search in the same way
   * search terms are validated on the front page.
   * @param {string} query
   * @private
   */
  _validateSearch(query: string) {
    this.currentQuery = query;

    if (query === '') {
      this.searchValid = undefined;
    } else {
      this.searchValid = (query.match(/^[\w\s]+$/g)) ? true : false;
    }

    if (this.searchValid === undefined) {
      this.errorMessage = 'Search can\'t be empty!';
      this.canClick = true;
    } else if (!this.searchValid) {
      this.errorMessage = 'Searches that don\'t only contain these characters are currently not supported: a-z, A-Z, 0-9, _ (underscore)';
      this.canClick = true;
    }
  }
}
