import { Injectable } from '@angular/core';

@Injectable()
export class SummaryService {
  summary: string;
  url: string;
  thumbnail: string;

  constructor() { }

  setSummary(summary) { this.summary = summary; }
  getSummary() { return this.summary; }
  setURL(url) { this.url = url; }
  getURL() { return this.url; }
  setThumbnail(thumbnailURL) { this.thumbnail = thumbnailURL; }
  getThumbnail() { return this.thumbnail; }
}
