import { trigger, state, style, animate, transition } from '@angular/animations';

export const showBreadcrumbs =
  trigger('showBreadcrumbs', [
    state('false', style({
      marginTop: '-68px'
    })),
    state('true', style({
      marginTop: '0px'
    })),
    transition('false => true', animate('200ms ease-in')),
    transition('true => false', animate('200ms ease-out')),
  ]);
