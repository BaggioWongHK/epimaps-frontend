import {Component, Input, OnInit} from '@angular/core';
import { fadeIn } from '../animations/fade.in';
import {TreeService} from '../tree.service';
import {CommunicationService} from '../communication/communication.service';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {SummaryService} from '../summary.service';
import {forkJoin} from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css'],
  animations: [ fadeIn ]
})
export class TreeNodeComponent implements OnInit {
  flipped = false;
  @Input() title: string;
  @Input() url: string;
  @Input() hasURL: boolean;
  @Input() hasChildren: boolean;
  @Input() index: number;

  constructor(private treeService: TreeService,
              private communication: CommunicationService,
              private router: Router,
              private api: ApiService,
              private summaryService: SummaryService) { }
  ngOnInit() { }

  /**
   * @description Flips the card.
   */
  public flipCard() {
    if (this.flipped) {
      this.flipped = false;
    } else {
      this.flipped = true;
    }
  }

  /**
   * @description This moves down a level in the tree,
   * shows new node component titles on the tree page.
   * @param {any} event
   */
  public showTree(event: any) {
    event.stopPropagation();
    this.treeService.currentTree.addTreeIndex(this.index);
    this.communication.emitEvent('changeTitles');
  }

  /**
   * @description This shows the summary attached to the
   * Wikipedia article of the search term. When clicked,
   * spinner is shown, we get the canonical URL of the
   * article, and then the summary and thumbnail. When
   * both the summary and thumbnail are fetched, and
   * they're not empty, navigate to the summary page.
   * @param event
   */
  public showSummary(event: any) {
    event.stopPropagation();

    this.communication.emitEvent({name: 'showSpinner'});

    const searchTerm = this.url.split('/')[2];

    this.api._getCanonicalURL(searchTerm).subscribe((urlResponse) => { // can't use this.url because it's not canonical, which is needed for the API, nor this.title because that's human friendly, not specific enough (compare 'bureau' to 'Ministry (government department)')
      this.summaryService.setURL(urlResponse.data);

      const obs1 = this.api.getSummarySA(urlResponse.data);
      const obs2 = this.api.getThumbnailSA(urlResponse.data);

      forkJoin(obs1, obs2).subscribe(([summaryResponse, thumbnailResponse]) => {
        if (summaryResponse.data && summaryResponse.data !== '') {
          this.summaryService.setSummary(summaryResponse.data);
        }

        if (thumbnailResponse.data && thumbnailResponse.data !== '') {
          this.summaryService.setThumbnail(thumbnailResponse.data);
        }

        if (this.summaryService.getSummary() && this.summaryService.getSummary() !== '') {
          this.communication.emitEvent({name: 'hideSpinner'});
          this.router.navigate(['/summary']);
        }
      });
    });
  }
}
