---
title:  The meat of the burger icon
teaser: What is the future of the hamburger icon as a responsive design pattern? 
layout: post
---

##Why hamburger icons?

It is a widely adopted UI design pattern that already was in use long before mobile and responsive even existed. Xerox Star (1981) used it for contextual menus already then.
Contextual menus and site navigation of a website are not equal concepts. The idea behind it to save screen real estate was the main goal.

{% image xerox_big.png "Xerox Star burger icon" "Xerox Star burger icon" %}

The hamburger as a design pattern got re-introduced again when it was used in mobile apps and found its way to responsive web design and web design in general. But is it any good?

You could argue it's a possible solution to a design problem. Managing the screen real estate on the viewport of mobile devices especially smart phones and tablets in portrait mode. Navigation lists can be too wide to fit in the horizontal available space of the viewport. Add other elements like logo and search form and the available space is little on smaller viewport sizes like tablets and mobile phones. The navigation that would not fit otherwise is set to a hidden state. The hamburger icon controls the visible state of the navigation or other elements like secondary navigation, search.

Another reason would be to hide the navigation all together to focus on content first.  This could work if the end-user is still able to find its way. On this [website](http://www.wbw.ch/) the entire menu is hidden under a burger icon on the desktop also on larger viewport sizes. 
There must be links in that hidden navigation that are important enough to be visible instead of hidden. This question is often overlooked. 

{% image burger_desktop.jpg "Example of burger icon on desktop" "Example of burger icon on desktop" %}

##Navigation and UI
There have been UX studies that question the efficiency of the burger icon as a design pattern. It would be not qualify sufficiently as a signifier in order to associate it with navigational elements. A [usability study from exisweb](http://exisweb.net/menu-eats-hamburger) was conducted to find out if people would prefer the burger icon or a textual 'MENU' link. A textual label 'MENU' would aid to clarify the meaning of the burger icon. This indicates that the icon does not stand on its own as a visual cue.

###Further reading
[usability study on burger and navicons](http://www.peakusability.com.au/articles/mobile-ux-part-1-menu-burgers-and-navicons)


In any case [hiding navigation](http://thenextweb.com/dd/2014/04/08/ux-designers-side-drawer-navigation-costing-half-user-engagement/) behind a burger icon could prove detrimental to the end-user's perception of what the site or app has to offer. There is always a trade-off to think about.

Normally the logo is always on the left but on many sites the burger icon appears both left and right on the top of the viewport. What is better left or right? It depends on the design and has not been standardised. It has little of influence.

In some cases it does work very well but it depends on whether the end-user is able to find and use the navigation accordingly. 

When the hamburger icon is used you don't see always state changes applied in the user interaction design. To provide a better user interaction adding a animated current state change proves very effective. As showcased here by using [CSS 3 transformations](http://sarasoueidan.com/blog/navicon-transformicons/) that indicate state change. This will help to make the end-user understand better the interaction performed.

<div class="inline-image">
{% image modal.jpg "Example of a modal-like pattern" "Example of a modal-like pattern" %}
</div>
<div class="inline-image">
{% image modal_active.jpg "Example of a modal-like pattern" "Example of a modal-like  pattern (active state)" %}
</div>

Rethinking the hamburger design pattern is always possible in the near future. The general idea is to test possible solutions on efficiency and have an open mind to improve when possible. Not every project is placed under the scrutiny of A/B testing. Often existing patterns are applied without evaluating first if it is the right design decision. Trends come and go, some are here to stay.