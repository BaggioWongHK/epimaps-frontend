import { trigger, state, animate, transition, style, stagger } from '@angular/animations';

export const slideIn = trigger('slideIn', [
  state('false', style( { // showTree = false
    marginLeft: -30
  })),
  state('true', style({ // showTree = true
    marginLeft: 10
  })),
  transition('false => true', animate('0.3s ease-in')),
  // transition('true => false', animate('0.3s ease-out')),
]);

export const slideOut = trigger('slideOut', [
  state('false', style( { // showTree = false
    marginLeft: 0
  })),
  state('true', style({ // showTree = true
    marginLeft: 40
  })),
  transition('true => false', animate('0.5s 0.6s ease-out'))
]);
