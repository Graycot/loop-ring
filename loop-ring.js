/* O-Ring v1.3 Copyleft © ALL WRONGS RESERVED © Gray (https://graycot.com/).

O-Ring takes inspiration from OnionRing (https://garlic.garden/onionring/onionring-widget.js). While much of the O-Ring code is original, specific portions of the OnionRing script have been re-arranged and repurposed.

OnionRing is free software; you can redistribute it and/or modify
it under the terms of the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html).

Unless voided by the terms of CNPL v4+, O-Ring is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License (GPLv3+) as published by
the Free Software Foundation. (http://www.gnu.org/licenses/)*/


const styles = `
#LoopRing{
  display: flex;
  justify-content: center;
}

.loop-ring * {
  margin:           unset;
  box-sizing:       border-box;
  padding:          unset;
  color:            unset;
  text-decoration:  unset;
}
.loop-ring{
  margin: 10px 0;
  width:max-content;
  height:max-content;
  display: flex;
}
.loop-ring:hover, .loop-ring:focus { box-shadow: none;  }

.loop-ring a {
  font: 700 clamp(18px, 1rem, 23px) "Poppins"; color: #f5f5f5;
  font-family: sans-serif;
  line-height: 1;

  border: 1px solid #b3b6b3;
  padding: 4px 8px;
  white-space: nowrap ;

  box-shadow: none;
  display: flex;
  justify-content: center;
  width: 100%;
}

.loop-ring a:first-child {
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  padding-left: 10px;
}

.loop-ring a:last-child {
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding-right: 10px;

}

.loop-ring a:hover, .loop-ring a:focus {
  box-shadow:
  0 0 1px 1px #fff7f7,
  0 0 2px 2px #c4bdbd,
  0 0 3px 3px #4e4d4d,

  inset 0 0 1px  #4e4d4d,
  inset 0 0 2px  #c4bdbd,
  inset 0 0 2px  #fff7f7;
}

`
// Applies the CSS above to the HTML page
const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

// Imports the list of member sites from sites.js:
import { sites } from "./sites.js";

// Sets thisSite to the adress of the site the user is currently on:
let thisSite = window.location.href;
// Finds the index of thisSite on the site list
let thisIndex;
let i;
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    break;
  }
}

//Calculate Random site:
let otherSites;
otherSites = sites.slice();
otherSites.splice(thisIndex, 1);
let randomIndex = Math.floor(Math.random() * otherSites.length);

//Calculate Previous and Next sites
let previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
let nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

// If the site that the user is currently on is not part of the webring, set the Previous and Next links to be Random.
if (thisIndex == null) {
  previousIndex = randomIndex;
  nextIndex = randomIndex;
}

// Insert HTML next to id="LoopRingJS":
let tag = document.getElementById('LoopRing');
tag.insertAdjacentHTML('afterbegin', `

  <div class="loop-ring">
      <a href='${sites[previousIndex]}'> < </a>
      <a href="https://graycot.com/webring/index.html#list"> ... </a>
      <a href="https://graycot.com/webring/index.html">Loop Ring</a>
      <a href='${sites[randomIndex]}'> ? </a>
      <a href='${sites[nextIndex]}'> > </a>
  </div>

`);