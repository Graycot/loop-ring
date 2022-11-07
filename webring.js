/* Oring v5.0. Copyleft 🄯 ALL WRONGS RESERVED 🄯 Gray (g@graycot.dev) (https://graycot.dev/).

Oring is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License (GPLv3+) as published by
the Free Software Foundation. (http://www.gnu.org/licenses/)*/

// get webring data
fetch("./webring.json")
.then(response => {
   return response.json();
})
.then(data => webring(data));

// get member sites list
fetch("./sites.json")
.then(response => {
   return response.json();
})
.then(data => sites(data));

function webring(data) {
  // get webring data webring.json
  var webringName = data.webringInfo[0].webringName;
  var webringURL = data.webringInfo[0].webringURL;
  var webringHome = data.webringInfo[0].webringHome;
  var webringMemberList = data.webringInfo[0].webringMemberList;
}

function sites(data) {
  // get sub.domain.TLD of referrer member site.
  var referrerURL = document.referrer;
  // Remove http(s) schemes and www. subdomain from URL.
  var referrerURLReplace = referrerURL.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, "");

  // find referrer member site in member list.
  for (i = 0; i < data.webringSites.length; i++) {
    siteURLRaw = data.webringSites[i].siteURL;
    // Chop off everything past the TLD.
    siteURLMatch = siteURLRaw.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/igm, "");
    // Remove http(s) schemes and www. subdomain from URL.
    siteURLReplace = siteURLMatch[0].replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, "");

    if (referrerURLReplace.startsWith(siteURLReplace)) {
      var referrerIndex = i;
      var referrerSiteURL = data.webringSites[referrerIndex].siteURL;
      var referrerSiteName = data.webringSites[referrerIndex].siteName;
      break;
    }
  }
  // Detect whether visitor clicked the Previous, List, Home, Next, Random, or other link:
  const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
  });
  let value = params.action;

  // If the referrer site is not part of the webring, set the previous and next values to random.

  // Execute redirect upon Previous, List, Home, Next, Random, or other actions
  if (value == 'prev' && referrerIndex !== undefined) {
      //find previous site in member list
      let previousIndex = (referrerIndex-1 < 0) ? data.webringSites.length-1 : referrerIndex-1;
      let previousSiteURL = data.webringSites[previousIndex].siteURL;
      window.location.href = previousSiteURL;

  } else if (value == 'next' && referrerIndex !== undefined) {
      //find next site in member list
      let nextIndex = (referrerIndex+1 >= data.webringSites.length) ? 0 : referrerIndex+1;
      let nextSiteURL = data.webringSites[nextIndex].siteURL;
      window.location.href = nextSiteURL;

  } else if (value == 'list') {
      window.location.href = webringMemberList;

  } else if (value == 'home') {
      window.location.href = webringHome;

  } else if (value == 'test') {
      console.log('test');

  } else {
      //In-case of value == undefined or referrerIndex is undefined, find random site in member list
      let randomIndex = Math.floor(Math.random() * (data.webringSites.length));
      let randomSiteURL = data.webringSites[randomIndex].siteURL;
      let randomSiteName = data.webringSites[randomIndex].siteName;
      window.location.href = randomSiteURL;
  }
};
