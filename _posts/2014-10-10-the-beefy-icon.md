---
title:  The meat of the burger icon
teaser: What is the future of the hamburger icon as a responsive design pattern? 
layout: post
---

##Why hamburger icons?
It's a possible solution to a design problem. The viewport on mobile devices especially smart phones and tablets in portrait mode needs carefully managing of the screen real estate. Navigation lists can be too wide to fit in the horizontal available space of the viewport. Add other elements like logo and search form and the available space is little on smaller viewport sizes like tablets and mobile phones. The hamburger UI design pattern tries to solve that. The navigation that would not fit otherwise is set to a hidden state. The hamburger icon controls the visible state of the navigation. But is it any good?

It is a widely adopted UI design pattern that already is in use long before mobile and responsive even existed. Xerox Star (1981) used it for contextual menus already then.

{% image xerox_big.png "Xerox Star burger icon" "Xerox Star burger icon" %}

The burger icon as a design pattern was picked up again when it was used in mobile apps and found its way to responsive web design and web design in general.

On this [website](http://www.wbw.ch/) the entire menu is hidden under a burger icon on the desktop also on larger viewport sizes. If this is a Content First strategy but than where is the wayfinding?
There must be links in that hidden navigation that are important enough to be visible instead of hidden. This question is often overlooked.

{% image burger_desktop.jpg "Example of burger icon on desktop" "Example of burger icon on desktop" %}

##Navigation and UI
There have been UX studies that question the efficiency of the burger icon as a design pattern. It would be not significant enough to associate it with navigational elements. A [usability study](http://exisweb.net/menu-eats-hamburger) was conducted to find out if people would prefer the burger icon or a textual 'MENU' link. A textual label 'MENU' would aid to clarify the meaning of the burger icon.

In any case [hiding navigation](http://thenextweb.com/dd/2014/04/08/ux-designers-side-drawer-navigation-costing-half-user-engagement/) behind a burger icon could prove detrimental to the end-user's perception of what the site or app has to offer. There is always a trade-off to think about.

Normally the logo is always on the left but on many sites the burger icon appears both left and right on the top of the viewport. What is better left or right? It depends on the design and has not been standardized. It has little of influence.

In some cases it does work very well but all depends on the complexity and scale of the data presented.

To provide a better user interaction adding a animated current state change proves very effective. As showcased here by using [CSS 3 transformations](http://sarasoueidan.com/blog/navicon-transformicons/) that indicate state change. 

<div class="inline-image">
{% image modal.jpg "Example of a modal-like pattern" "Example of a modal-like pattern" %}
</div>
<div class="inline-image">
{% image modal_active.jpg "Example of a modal-like pattern" "Example of a modal-like  pattern (active state)" %}
</div>

Rethinking the design pattern is always possible in the near future. Not every project is placed under the scrutiny of A/B testing. Often existing patterns are applied without evaluating first if it is the right design decision.