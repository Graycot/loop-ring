/* O-Ring v1.3 Copyleft © ALL WRONGS RESERVED © Gray (https://graycot.com/).

O-Ring takes inspiration from OnionRing (https://garlic.garden/onionring/onionring-widget.js). While much of the O-Ring code is original, specific portions of the OnionRing script have been re-arranged and repurposed.
Unlike OnionRing which was designed to be a JavaScript widget on each webring member site, O-Ring was built as a redirect script hosted by the webring RingMaster. This eliminates the security vulnerability of remote
JavaScript on each webring member's sites. Additionally, the HTML method is more flexible and allows each member more creative freedom on the look and functionality of the ring code on their site.

OnionRing is free software; you can redistribute it and/or modify
it under the terms of the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html).

Unless voided by the terms of CNPL v4+, O-Ring is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License (GPLv3+) as published by
the Free Software Foundation. (http://www.gnu.org/licenses/)*/




// Import list of member sites from sites.js:
import { sites } from "./sites.js"; //!!! replace ./sites.js with the URL/URI of your sites.js location.

// Sets thisSite to the adress of the member site the user was just on:
let thisSite = document.referrer;

// Finds the index of thisSite on the site list
let thisIndex;
let i;
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    break;
  }
}

// Calculates a Random site:
let otherSites;
otherSites = sites.slice();
otherSites.splice(thisIndex, 1);
let randomIndex = Math.floor(Math.random() * otherSites.length);

// Calculates Previous and Next sites
let previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
let nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

// Detects whether user clicked the Previous, List, Home, Next, Random, or other link:
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let value = params.action;

// If the site that the user just came from is not part of the webring, this sets the Previous and Next button to Random.
if (thisIndex == null) {
  previousIndex = randomIndex;
  nextIndex = randomIndex;
}

// Previous, List, Home, Next, Random, or other actions
if (value == 'prev') {
    window.location.href = sites[previousIndex];
} else if (value == 'next') {
    window.location.href = sites[nextIndex];
} else if (value == 'list') {
    window.location.href = 'https://graycot.com/webring/index.html#list'; //!!! replace this URL with your member list page. Create a member list by inserting the script at https://codepen.io/graycot/pen/JjMXrOK into an HTML page.
} else if (value == 'home') {
    window.location.href = 'https://graycot.com/webring/index.html'; //!!! replace this URL with the homepage for your webring
} else if (value == 'rand') {
    window.location.href = sites[randomIndex];;
} else {
    window.location.href = sites[randomIndex];; //In-case of value == null
}


