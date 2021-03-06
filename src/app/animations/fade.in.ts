import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeIn =
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1s', style({ opacity: 1 }))
    ]),
  ]);

export const fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('.3s', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('.3s', style({ opacity: 0 }))
  ])
]);
