import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicationService {

  constructor() { }

  private eventSource = new BehaviorSubject<any>('');
  currentEvent = this.eventSource.asObservable();

  /**
   * @description A way to pass data between components that
   * have no direct relation (e.g. not parent-child)
   * @param {any} event Data to pass on
   */
  emitEvent(event: any) {
    this.eventSource.next(event);
  }
}
