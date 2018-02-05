import { Component, OnInit } from '@angular/core';
import { fadeIn, fade } from '../animations/fade.in';
import { searchValid } from '../animations/search.valid';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {TreeService} from '../tree.service';
import {CommunicationService} from '../communication/communication.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [ fadeIn, searchValid ]
})
export class SearchComponent implements OnInit {
  searchValid: boolean;
  errorMessage: string;
  showErrorMessage = false;
  constructor(private router: Router,
              private api: ApiService,
              private treeService: TreeService,
              private communication: CommunicationService) {
  }

  ngOnInit() {}

  /**
   * @description This processes the search form on the
   * home page. When searching, the spinner shows while
   * determining if the corresponding Wikipedia article
   * exists. If it does and the response sent back isn't
   * empty and tree extraction succeeds, then it navigates
   * to the tree page with the extracted data. If the server
   * sends back an error response, that's displayed.
   * @param {string} query
   * @param {KeyboardEvent} event
   */
  doSearch(query: string, event: KeyboardEvent) {
    this._validateSearch(query);

    //  if search is valid
    if (event.key === 'Enter' && this.searchValid) {
      this.communication.emitEvent({name: 'showSpinner'});

      this.api._getCanonicalURL(query).subscribe((response) => {
        if (!response.error) {
          //  if corresponding Wikipedia article exists
          this.api.articleExistsSA(response.data).subscribe((existsResponse) => {
            if (existsResponse.data) {
              //  set URL, tree, extract root level data and navigate to the tree page
              this.treeService.currentTree.setCanonicalURL(response.data);

              //  additional API call to extract tree
              this.api.getTreesSA(response.data).subscribe( (treesResponse) => {
                if (!treesResponse.error) {
                  if (treesResponse.data.length === 0) { //  empty tree
                    this.errorMessage = 'Oops, it seems like there are no trees for this topic.';
                    this.showErrorMessage = true;
                    this.communication.emitEvent({name: 'hideSpinner'});
                  } else {
                    this.treeService.currentTree.setTree(treesResponse.data);

                    if (this.treeService.currentTree.extractDataL0() === -1) {  //  error extracting tree data (client side)
                      this.errorMessage = 'There has been an error processing the tree.';
                      this.showErrorMessage = true;
                      this.communication.emitEvent({name: 'hideSpinner'});
                    } else { //  navigates to tree page
                      console.log(this.treeService.getCurrentTree());
                      this.communication.emitEvent({name: 'hideSpinner'});
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
          this.showErrorMessage = true;

          Observable.interval(3000).take(1).subscribe(() => {
            this.showErrorMessage = false;
          });
        }
      }); // server error
    }
  }

  /**
   * @description Determines whether search string
   * is valid.
   * @param {string} query
   * @private
   */
  _validateSearch(query: string) {
    if (query === '') {
      this.searchValid = undefined;
    } else {
      this.searchValid = (query.match(/^[\w\s]+$/g)) ? true : false;
    }

    if (this.searchValid === undefined) {
      this.errorMessage = 'Search can\'t be empty!';
    } else if (!this.searchValid) {
      this.errorMessage = 'Please note that searches must only contain these characters: a-z, A-Z, 0-9, _ (underscore)';
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
    }
  }
}
