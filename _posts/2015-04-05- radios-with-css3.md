---
title: Radio buttons with style
teaser: Styling radio input elements with CSS 3. 
layout: post
---

To create a consistent and uniform style with form elements certainly had its limitations in the past and was rather complex to say the least.
To completely provide styling for the select element is still not possible without using JS. That goes for the file inputs as well. A lot of front-end developers would argue if we should style forms at all as most form elements are not easy to theme. As a result some form UI would not get styled and others would. What you would see most, is styled text inputs and the rest would not get styled.

I thought of sharing a style I created for a recent project where I wanted to style radio buttons. A style still close to the orignal UI default style. A outer circle as default and a selected state where the outer circle becomes a small dot in the center and highlighted with a background color. The idea I had was to avoid using any background images and use CSS 3 to create the styles instead.


{% gist jvandenrym/f35f29faac40b5b2cb89 %}

{% image radios_unstyled.jpg "Radio buttons' default UI look in Firefox" "Radio buttons' default UI look in Firefox" %}

##Styling the radios ##
Feel free to check the codepen. it relies on transform (scale) and border-radius to create the rounded radio button styles and you need to hide the radio button and style the label instead to make it work. You use the pseudo selector :checked to define the selected style.
I used sass to compile the CSS but you can view the compiled css as well.


 {% codepen zxQoXb JohanVdR 600 %}
