# Some links to reference

## Process

1. `ng build` to build project

2. `npm run start` to start the server

3. Changes aren't automatic - you need to restart them whenever you want to test changes

4. Remember to always test with Canary - normal Chrome is for non-IT work

## Tidying up

1. Refactoring
2. Deleting redundant stuff
3. Tidying up documentation
4. Exporting whole project and commit to GitHub
5. Upload backend and frontend separately (both including links to the complete repo)

## Next

~~1. We're going to finish off breadcrumbs next~~
~~2. Breadcrumbs are disabled in mobile view (they clash with desktop)~~
~~3. We're going to work on the tag cloud~~
~~4. Finally closing off everything with the summary pages~~
~~5. Directive bug? (on if you go from home to tag cloud, the page doubles in size)~~
~~7. Hover effect on tag cloud~~
6. ~~Final touches (tooltip on trees)~~
~~7. Error messages~~
~~Messages on valid URLs, but empty summaries~~
~~Error in search input~~
~~Error in search results~~
~~8. Spinner while searching~~

## Add to report

~~Lots of things stem from inconsistency to do with Wikipedia's APIs~~
~~- Fetching wikimedia images, sometimes there's a pageid, sometimes it's -1, what's to say there isn's another value?~~
~~- The thumbnails fetched are small in size - you specify the size of the photo to the width you want - but what's to say this scheme is consistent?~~  
~~- This made coding very difficult - there's no clear API that covers all use cases, I can guarantee correctness _only_ within this scope, but there are cases that pop up from time to time that fall _beyond_ this scope~~

Difficulties
~~- Very annoying bug I couldn't fix with trees - if you navigate 
away, then go to the search page, then go to trees again, the double
subscribe callback error appears again.~~ 

~~- CSS was very hard for me, thankful for Bootstrap, but I had difficulties co-ordinating design~~

~~- Lesson learned: don't be a project manager, a coder and a designer simultaneously, it doesn't work~~

~~- Breadcrumbs was quite tedious to write, but it's the least important function, again, this stems from Wikipedia's irregular data structure, but I suppose I carry responsibility when preparing the backend's data as well. There were many unexpected interactions, or sequences of interactions that led to anomalies reflected in the lack of logic present to deal with those anomalies in particular, which was difficult to predict. A hard reset was necessary to resolve an error I suspect had to do with Angular's lifecycle hooks.~~

~~- Animations proved difficult at times as well, adding a fade animation, for some reason, interfered with *ngIf from working properly, but a unidirectional fade was ok (:leave + :enter not okay!)~~

## Latest changes

1. "allowJs": true in tsconfig.json
2. getChildrenAtLevel - I'm not sure if it's this that's causing the bugs
but for some reason, sometimes clicking the tree icon in the trees page will trigger the function twice
~~3. Changed validQuery in backend (some terms in href might contain parentheses)~~
~~4. Commented ngOnDestroy in tree.component (window.location.reload) bugfix so that summary would work (reload removes all data)~~

## The directive

1. `*ngFor` to loop through an array of tags first
2. We set display to hidden at first (they're turned on if placeable)
3. We then pass the index into the directive
4. The directive sets styles based on the directive
5. We try to randomize its position and set its properties
6. If it doesn't overlap and its position doesn't exceed the parent viewport, DOMRect is placed in a common array
7. If it's placeable, we turn display back on  

## Tasks 

- We'll put in the hover and click effects at the end. 
~~- Need to have a look at popovers (which direction to place them in).~~ 
- Animations to implement
  1. ~~Hover on navbar buttons (CSS)~~
  2. ~~Click on navbar buttons (CSS)~~
  3. ~~Hover on breadcrumbs items (CSS)~~
  4. ~~Click on breadcrumbs items (CSS)~~
  5. ~~Slide up / slide down breadcrumbs (Angular)~~
  6. ~~Click on tree item (Angular)~~
  7. ~~Hover on tree item (Angular)~~
  8. ~~Page up and page down buttons (mobile and desktop) (CSS)~~
  9. ~~Tree items fadeOut fadeIn (page up page down) (Angular)~~
  10. ~~Tree items show buttons (desktop) (Angular)~~
  11. ~~Tree items show buttons (mobile) (Angular)~~
  12. ~~Tree items buttons hover (desktop) (CSS)~~
  13. ~~Tree items buttons click (mobile and desktop) (CSS)~~
  14. ~~Search fade validation (Angular)~~
  15. ~~Router change transitions (Angular)~~
- To do 6, 7, need to create individual tree branch component first
  1. ~~Mobile~~
  2. ~~Desktop~~ 
- ~~Directives~~
  ~~1. The Angular tag cloud directive!!~~
      ~~1. getBoundingClientRect equivalent in Angular? (you should probably calculate this instead)
      2. Access window height and width properties?
      3. Create a new span tag component and set its properties
      4. Append that span tag component into the parent container
      5. Get the width, height, x(left), y(top) of span tag component (these are things you've set, so you shouldn't have to retrieve it)
      6. Remove span tag component from parent container
      7. Get the getBoundingClientRect of other tag components
      8. Passing values in and out of directives / components~~

Getting a style (Ruler is essentially getBoundingClientRect())      
https://stackoverflow.com/questions/37266401/angular2-proper-way-to-get-element-component-styles
- ~~Http~~
  1. ~~Article exists~~
  2. ~~Tree getting the epistemic tree~~
  3. ~~Article summary~~
  4. ~~Article thumbnail~~
  5. ~~Article images (fallback if no thumbnail)~~
  6. ~~Google trending terms~~
- Routing
  1. ~~Search --> Tree~~
  2. ~~Tree --> Summary~~
  3. ~~Trending --> Tree~~
  4. ~~Trending --> Summary (removed)~~
- Integration
  1. ~~Search (debounce, throttle) (removed debounce, throttle - not autocomplete)~~ 
  2. ~~Clicking on show tree button on tree node~~
  3. ~~Clicking on show summary button on tree node~~

## Notes
- npm install --save @types/jquery 

To get jQuery everywhere

- **Great Angular tutorials / lessons**

https://angularfirebase.com/lessons/


- DOM manipluation in Angular

https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02

https://stackoverflow.com/questions/37376442/where-does-dom-manipulation-belong-in-angular-2

**https://www.concretepage.com/angular-2/angular-4-renderer2-example

https://medium.com/front-end-hacking/dynamically-add-components-to-the-dom-with-angular-71b0cb535286

**https://www.youtube.com/watch?v=LjCOe1PcP5g&t=316s

https://stackoverflow.com/questions/37881169/angular-2-getboundingclientrect-from-component

- Angular animations

http://jasonwatmore.com/post/2017/04/19/angular-2-4-router-animation-tutorial-example

https://angularfirebase.com/snippets/router-transition-animations-with-angular-4/

https://medium.com/@tanya/angular4-animated-route-transitions-b5b9667cd67c

- Event propagation

https://stackoverflow.com/questions/35274028/stop-event-propagation-in-angular-2

- :not selector

https://stackoverflow.com/questions/11703241/does-css-have-a-blur-selector-pseudo-class

- Tag cloud (Angular 2+) example

https://www.npmjs.com/package/angular-tag-cloud-module

- Communication between unrelated comopnents (not parent-child nor child-parent)

https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/

http://jasonwatmore.com/post/2016/12/01/angular-2-communicating-between-components-with-observable-subject

- Chaining http calls

https://stackoverflow.com/questions/34104638/how-to-chain-http-calls-in-angular2

- Property ‘map’ does not exist on type ‘Observable<Response>’

https://medium.com/@colin_78999/solution-to-problem-property-map-does-not-exist-on-type-observable-response-cccd13b07145

- Accessing HTMLElement properties, attributes and styles natively

https://developer.mozilla.org/en-US/docs/Web/API/Element

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

- Using hostBinding

https://stackoverflow.com/questions/35915433/angular2-styles-in-a-directive

- Routing with parameters

A really outstanding answer

https://stackoverflow.com/questions/44864303/sending-data-with-route-navigate-in-angular-2/44865817

- Compodocs

**To run**: `npm run doc`

**To serve**: `npm run compodoc`

https://compodoc.github.io/website/guides/tutorial.html (configuration)

Useful post that helped solve a runtime error: https://github.com/compodoc/compodoc/issues/362
