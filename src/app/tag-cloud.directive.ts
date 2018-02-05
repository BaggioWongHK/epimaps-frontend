import {
  Directive, ElementRef, HostListener, Renderer2, Input, OnInit, AfterViewChecked,
  AfterViewInit
} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';


@Directive({
  selector: '[appTagCloud]'
})
export class TagCloudDirective implements OnInit, AfterViewChecked, AfterViewInit {

  constructor(private ele: ElementRef, private renderer: Renderer2) { }


  // @Input() tags: Array<string>;
  @Input() tagPopularity: number;
  @Input() tagName: string;
  @Input() occupiedDOMRects: Array<any>;

  ngOnInit() {}

  ngAfterViewInit() {
    Observable.interval(1).take(1).subscribe(() => { // initial load incorrect viewport height bug fix
      const currentVP = {
        height: document.documentElement.getBoundingClientRect().height,
        width: document.documentElement.getBoundingClientRect().width
      };
      this.randomizeTag(currentVP);
    });
  }

  /**
   * @description Main body of logic randomizing tag placements
   * on the page. Basically, we generate random co-ordinates and
   * try to place the tag there, and we keep on trying if those
   * tags either exceed the viewport, or overlap with tags that
   * have valid placements. We also impose a limit of the max
   * number of iterations a tag can be re-placed, because it
   * can severely affect rendering performance beyond a certain
   * threshold.
   * @param {Object} currentVP Object containing viewport
   * height and width. We include this because of a bug
   * that initially loads incorrect values on page load.
   */
  randomizeTag(currentVP) {
    const vp = currentVP; // initial load incorrect viewport height bug fix

    const RANDOMIZE_THRESHOLD = 50;
    let randomizeIterations = 0;

    randomize: do {
      if (randomizeIterations > RANDOMIZE_THRESHOLD) {
        this.renderer.setStyle(this.ele.nativeElement, 'display', 'none');
        return;
      } else {
        this.renderer.setStyle(this.ele.nativeElement, 'display', 'block');
      }

      //  randomize an area for the text - 60 because of navbar, the .95 to avoid it getting a little too close
      const randomCoords = { x: this.getRandomInt(20, vp.width * 0.95), y: this.getRandomInt(60, vp.height * 0.95) };

      //  style tags
      this.renderer.setStyle(this.ele.nativeElement, 'position', 'absolute');
      this.renderer.setStyle(this.ele.nativeElement, 'fontSize', this.getTagStyle(this.tagPopularity).getFontSize());
      this.renderer.setStyle(this.ele.nativeElement, 'color', this.getTagStyle(this.tagPopularity).getColor());
      this.renderer.setStyle(this.ele.nativeElement, 'top',  `${randomCoords.y}px`);
      this.renderer.setStyle(this.ele.nativeElement, 'left', `${randomCoords.x}px`);
      this.renderer.setStyle(this.ele.nativeElement, 'visibility', 'visible');

      const boundingClientRect = this.ele.nativeElement.getBoundingClientRect();

      //  try again if exceeds viewport
      if (this.exceedsViewport(boundingClientRect)) {
        randomizeIterations++;
        continue randomize;
      }

      //  try again if overlaps with other tags
      for (let rectIndex = 0; rectIndex < this.occupiedDOMRects.length; rectIndex++) {
        if (this.boundingRectsOverlap(boundingClientRect, this.occupiedDOMRects[rectIndex])) {
          randomizeIterations++;
          continue randomize;
        }
      }

      //  save boundingClientRect of this tag
      this.occupiedDOMRects.push(boundingClientRect);

      break randomize;
    } while (true);
  }

  ngAfterViewChecked() {  // for debugging
    // const boundingClientRect = this.ele.nativeElement.getBoundingClientRect();
    // const vp = {
    //   height: document.documentElement.getBoundingClientRect().height,
    //   width: document.documentElement.getBoundingClientRect().width
    // };
    // console.log(this.tagName, 'VP', vp, 'Rect', boundingClientRect, 'Exceeds', this.exceedsViewport(boundingClientRect));
    // console.log(this.tagName, this.ele.nativeElement, 'Rect', boundingClientRect, 'Taken', this.occupiedDOMRects);
  }

  /**
   * @description We want to use various gradients of green
   * to indicate the popularity of tags. The 22 most popular
   * items have unique colours and font sizes. The rest share
   * one colour and font size.
   * @param {number} tagPopularity
   * @return {TagStyle}
   */
  getTagStyle(tagPopularity: number): TagStyle {
    let fontSize = '18px', color = '#9fb883';

    switch (tagPopularity) {
      case 0:
        fontSize = '36px';
        color = '#33691e';
        break;
      case 1: case 2:
      fontSize = '34px';
      color = '#33691e';
      break;
      case 3: case 4:
      fontSize = '32px';
      color = '#33691e';
      break;
      case 5: case 6: case 7:
      fontSize = '30px';
      color = '#558b2f';
      break;
      case 8: case 9: case 10:
      fontSize = '28px';
      color = '#689f38';
      break;
      case 11: case 12: case 13:
      fontSize = '26px';
      color = '#7cb342';
      break;
      case 14: case 15: case 16:
      fontSize = '24px';
      color = '#8bc34a';
      break;
      case 17: case 18: case 19:
      fontSize = '22px';
      color = '#9ccc65';
      break;
      case 20: case 21: case 22:
      fontSize = '20px';
      color = '#aed581';
      break;
      default:
        fontSize = '18px';
        color = '#9fb883';
        break;
    }

    return new TagStyle(fontSize, color); // { fontSize: fontSize, color: color };
  }


  /**
   * @description Tests if two tags overlap, based on their
   * boundingClientRect object.
   * @param {ClientRect} rect1
   * @param {ClientRect} rect2
   * @return {boolean}
   */
  boundingRectsOverlap(rect1: ClientRect, rect2: ClientRect): boolean {
    const overlap = !(rect1.right < rect2.left ||
                      rect1.left > rect2.right ||
                      rect1.bottom < rect2.top ||
                      rect1.top > rect2.bottom);

    return overlap;
  }

  /**
   * @description Tests if a tag is placed in an area
   * that exceeds the viewport that will lead the page
   * to scroll.
   * @param {DOMRectInit} rect
   * @return {boolean}
   */
  exceedsViewport(rect: DOMRectInit): boolean {
    let exceedsViewport = false;

    const vp = {
      height: document.documentElement.getBoundingClientRect().height,
      width: document.documentElement.getBoundingClientRect().width
    };

    if (rect.x + rect.width > vp.width || rect.y + rect.height > vp.height) {
      exceedsViewport = true;
    }

    return exceedsViewport;
  }

  /**
   * @description Get random int between min and max.
   * @param min
   * @param max
   * @return {number}
   */
  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  @HostListener('window:resize')
  positionTag() { // initial load incorrect viewport height bug fix
    const currentVP = {
      height: document.documentElement.getBoundingClientRect().height,
      width: document.documentElement.getBoundingClientRect().width
    };
    this.randomizeTag(currentVP);
  }
}

class TagStyle {
  fontSize: string;
  color: string;

  constructor(size: string, colorString: string) {
    this.fontSize = size;
    this.color = colorString;
  }

  setColor(colorString: string) { this.color = colorString; }
  getColor(): string { return this.color; }
  setFontSize(size: string) { this.fontSize = size; }
  getFontSize(): string { return this.fontSize; }
}
