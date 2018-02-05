import {AfterViewChecked, Component, OnInit} from '@angular/core';
import { fadeIn } from '../animations/fade.in';
import {CommunicationService} from '../communication/communication.service';
import {ApiService} from '../api.service';
import {SummaryService} from '../summary.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  animations: [ fadeIn ]
})
export class SummaryComponent implements OnInit {
  summary: string;
  thumbnail: string;

  constructor(private communication: CommunicationService,
              private api: ApiService,
              private summaryService: SummaryService,
              private router: Router) { }

  ngOnInit() {
    //  prevent direct access to this page (when no summary has been fetched)
    if (!this.summaryService.getSummary() || this.summaryService.getSummary() === '') {
      this.router.navigate(['/']);
    }

    this.summary = this.summaryService.getSummary();

    if (this.summary === '') {
      this.summary = 'There seems to be an error fetching the summary. You\'ll now be redirected back home...sorry!';
    }

    this.thumbnail = (this.summaryService.getThumbnail()) ? this.enlargeThumbnail(this.summaryService.getThumbnail()) : '';
  }

  /**
   * @description For some reason, this particular API returns a
   * thumbnail image of a shrunken size. Changing a parameter in
   * the return URL allows the image to be enlarged considerably.
   * @param {string} thumbnailURL
   * @return {string}
   */
  enlargeThumbnail(thumbnailURL: string) {
    return thumbnailURL.replace(/\/{1}\d+px/g, '/400px');
  }
}
