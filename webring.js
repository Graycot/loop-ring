/* Oring v4.0. Copyleft 🄯 ALL WRONGS RESERVED 🄯 Gray (g@graycot.dev) (https://graycot.dev/).

Oring is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License (GPLv3+) as published by
the Free Software Foundation. (http://www.gnu.org/licenses/)*/

// get webring data
fetch("./webring.json")
.then(response => {
   return response.json();
})
.then(data => webring(data));

// get sites list
fetch("./sites.json")
.then(response => {
   return response.json();
})
.then(data => sites(data));

function webring(data) {
  // get webring data webring.json
  let webringName = data.webringInfo[0].webringName;
  let webringURL = data.webringInfo[0].webringURL;
  let webringHome = data.webringInfo[0].webringHome;
  let webringMemberList = data.webringInfo[0].webringMemberList;
}

function sites(data) {

  // get URL of this member site
  let thisSiteURL = window.location.href;
  //init to avoid weird errors
  let thisIndex;
  let i;
  let thisSiteName
  //find this site in member list
  for (i = 0; i < data.webringSites.length; i++) {
    if (thisSiteURL.startsWith(data.webringSites[i].siteURL)) {
      thisIndex = i;
      thisSiteName = data.webringSites[thisIndex].siteName;
      break;
    }
  }
  //if this site is not in member list, set index to last member of list
  if (thisIndex == undefined) {
  thisIndex = data.webringSites.length-1;
  thisSiteName = 'unknown'
  }
  // find index of site before and after this site. Also compute a random index.
  let previousIndex = (thisIndex-1 < 0) ? data.webringSites.length-1 : thisIndex-1;
  let randomIndex = Math.floor(Math.random() * (data.webringSites.length));
  let nextIndex = (thisIndex+1 >= data.webringSites.length) ? 0 : thisIndex+1;
  // use the indices calculated above to find the corresponding site URL in the member list
  let previousSiteURL = data.webringSites[previousIndex].siteURL;
  let randomSiteURL = data.webringSites[randomIndex].siteURL;
  let nextSiteURL = data.webringSites[nextIndex].siteURL;

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
      window.location.href = previousSiteURL;
  } else if (value == 'next') {
      window.location.href = nextSiteURL;
  } else if (value == 'list') {
      window.location.href = webringMemberList;
  } else if (value == 'home') {
      window.location.href = webringHome;
  } else if (value == 'rand') {
      window.location.href = randomSiteURL;
  } else {
      window.location.href = randomSiteURL; //In-case of value == null
  }

};
