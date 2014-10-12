---
title:  The meat of the burger icon
teaser: What is the future of the hamburger icon as a responsive design pattern? 
layout: post
---

##Why hamburger icons?
The viewport on mobile devices especially smart phones in portrait mode needs carefully managing of the screen real estate. Navigation lists can be too wide to fit in the horizontal available space of the viewport. Add other elements like logo and search form and the available space is little on smaller viewport sizes like tablets and mobile phones. The hamburger UI design pattern tries to solve that. The navigation that would not fit otherwise is set to a hidden state. The hamburger icon controls the visible state of the navigation.

The burger icon design pattern was already used long before mobile and responsive got into the picture. Xerox Star (1970s) used it for contextual menus already then.

The use of the burger icon (responsive menu) as a design pattern emerged from mobile and found its way to the desktop as well.

{% image burger_desktop.jpg "Example of burger icon on desktop" "Example of burger icon on desktop" %}

##Navigation and UI
There have been studies that question the efficiency of the burger icon as a design pattern. It would be not significant enough to associate it with navigational elements. A [usability study](http://exisweb.net/menu-eats-hamburger) was conducted to find out how people would react to the burger icon. A textual label 'MENU' would aid to clarify the meaning of the burger icon.

In any case [hiding navigation](http://thenextweb.com/dd/2014/04/08/ux-designers-side-drawer-navigation-costing-half-user-engagement/) behind a burger icon could prove detrimental to the end-user's perception of what the site or app has to offer. 

The icon appears both left and right on the top of the viewport. What is better left or right? It depends on the design and has not been standardized. It has little of influence.

Providing a animated current state change proves very effective. As showcased here by using [CSS 3 transformations](http://sarasoueidan.com/blog/navicon-transformicons/) that indicate the state change. 

<div class="inline-image">
{% image modal.jpg "Example of a modal-like pattern" "Example of a modal-like pattern" %}
</div>
<div class="inline-image">
{% image modal_active.jpg "Example of a modal-like pattern" "Example of a modal-like  pattern (active state)" %}
</div>

Rethinking the design pattern is always possible in the near future. Not every project is put under the scrutiny of A/B testing. Often existing patterns are applied without evaluating first if it is the right design decision.