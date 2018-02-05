import { trigger, state, style, animate, transition } from '@angular/animations';

export const searchValid =
  trigger('searchValid', [
    state('false', style({
      backgroundColor: '#c8e6c9ba',
    })),
    state('true', style({
      backgroundColor: '#388e3cba',
      color: 'white',
    })),
    transition('false => true', animate('200ms ease-in')),
    transition('true => false', animate('200ms ease-out')),
  ]);
