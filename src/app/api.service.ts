import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService implements OnInit {
  API_URL = 'http://localhost:3000/api/wikipedia/article';

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  /**
   * @description This must precede all requests where a query is involved
   * @param {string} query
   * @return {Observable<HTTPResponse>}
   * @private
   */
  _getCanonicalURL(query: string): Observable<HTTPResponse> {
    return <Observable<HTTPResponse>>this.http.post(`${this.API_URL}/canonical`, { 'query': query } );
  }

  /**
   * @description Check if article exists.
   * @param {string} query Valid search term string.
   * @return {Observable<Observable<HTTPResponse>>}
   */
  articleExists(query: string): Observable<Observable<HTTPResponse>> {
    return <Observable<Observable<HTTPResponse>>> this._getCanonicalURL(query).map((response) => {
      // console.log(response);
      if (!response.error) {
        return this.http.post(`${this.API_URL}/exists`, { 'url':  response.data });
      } else {
        return response.error;
      }
    });
  }

  /**
   * @description Get images associated with Wikipedia article.
   * @param {string} query Valid search term string.
   * @return {Observable<Observable<HTTPResponse>>}
   */
  getImages(query: string): Observable<Observable<HTTPResponse>> {
    return <Observable<Observable<HTTPResponse>>> this._getCanonicalURL(query).map((response) => {
      if (!response.error) {
        return this.http.post(`${this.API_URL}/images`, { 'url':  response.data });
      } else {
        return response.error;
      }
    });
  }

  /**
   * @description Fetch summary of Wikipedia article.
   * @param {string} query Valid search term string.
   * @return {Observable<Observable<HTTPResponse>>}
   */
  getSummary(query: string): Observable<Observable<HTTPResponse>> {
    return <Observable<Observable<HTTPResponse>>> this._getCanonicalURL(query).map((response) => {
      if (!response.error) {
        return this.http.post(`${this.API_URL}/summary`, { 'url':  response.data });
      } else {
        return response.error;
      }
    });
  }

  /**
   * @description Fetch thumbnail of Wikipedia article. Note
   * that this can sometimes fetch something that doesn't
   * visually match the article. The API is provided by
   * Wikipedia and there may be errors.
   * @param {string} query Valid search term string.
   * @return {Observable<Observable<HTTPResponse>>}
   */
  getThumbnail(query: string): Observable<Observable<HTTPResponse>> {
    return <Observable<Observable<HTTPResponse>>> this._getCanonicalURL(query).map((response) => {
      if (!response.error) {
        return this.http.post(`${this.API_URL}/thumbnail`, { 'url':  response.data });
      } else {
        return response.error;
      }
    });
  }

  /**
   * @description Fetches tree structure containing parsed navbox
   * of a Wikipedia article.
   * @param {string} query Valid search term string.
   * @return {Observable<Observable<HTTPResponse>>}
   */
  getTrees(query: string): Observable<Observable<HTTPResponse>> {
    return <Observable<Observable<HTTPResponse>>> this._getCanonicalURL(query).map((response) => {
      if (!response.error) {
        return this.http.post(`${this.API_URL}/trees`, { 'url':  response.data });
      } else {
        return response.error;
      }
    });
  }

  /** Standalone methods below that aren't preceded by the getCanonicalURL method **/

  /**
   * @description Fetches trending searches at Google.
   * @return {Observable<HTTPResponse>}
   */
  getTrendingItems(): Observable<HTTPResponse> {
    return <Observable<HTTPResponse>>this.http.get(`${this.API_URL}/trending`);
  }

  /**
   * @description See whether article exists for search term. (SA = standalone,
   * not preceded by the getCanonicalURL method)
   * @param {string} url Valid search term string.
   * @return {Observable<HTTPResponse>}
   */
  articleExistsSA(url: string): Observable<HTTPResponse> {
    return <Observable<HTTPResponse>> this.http.post(`${this.API_URL}/exists`, { 'url':  url });
  }

  /**
   * @description Get images associated with Wikipedia article. (SA = standalone,
   * not preceded by the getCanonicalURL method)
   * @param {string} url Valid search term string.
   * @return {Observable<HTTPResponse>}
   */
  getImagesSA(url: string): Observable<HTTPResponse> {
    return <Observable<HTTPResponse>> this.http.post(`${this.API_URL}/images`, { 'url':  url });
  }

  /**
   * @description Fetch summary of Wikipedia article. (SA = standalone,
   * not preceded by the getCanonicalURL method)
   * @param {string} url Valid search term string.
   * @return {Observable<HTTPResponse>}
   */
  getSummarySA(url: string): Observable<HTTPResponse> {
    return <Observable<HTTPResponse>> this.http.post(`${this.API_URL}/summary`, { 'url':  url });
  }

  /**
   * @description Fetch thumbnail of Wikipedia article. Note
   * that this can sometimes fetch something that doesn't
   * visually match the article. The API is provided by
   * Wikipedia and there may be errors. (SA = standalone,
   * not preceded by the getCanonicalURL method)
   * @param {string} url Valid search term string.
   * @return {Observable<HTTPResponse>}
   */
  getThumbnailSA(url: string): Observable<HTTPResponse> {
    return <Observable<HTTPResponse>> this.http.post(`${this.API_URL}/thumbnail`, { 'url':  url });
  }

  /**
   * @description Fetches tree structure containing parsed navbox
   * of a Wikipedia article. (SA = standalone,
   * not preceded by the getCanonicalURL method)
   * @param {string} url Valid search term string.
   * @return {Observable<HTTPResponse>}
   */
  getTreesSA(url: string): Observable<HTTPResponse> {
    return <Observable<HTTPResponse>> this.http.post(`${this.API_URL}/trees`, { 'url':  url });
  }
}

export class HTTPResponse {
  error: any;
  data: any;

  constructor() {
    this.error = null;
    this.data = null;
  }

  /* For some reason, these don't work */
  getError(): any { return this.error; }
  getData(): any { return this.data; }
}
