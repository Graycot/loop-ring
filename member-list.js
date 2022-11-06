const tag = document.getElementById('member-list');

fetch("webring.json") // Import data from webring.json
.then((response) => {
  return response.json();
})
.then((data) => webring(data));

fetch("sites.json") // Import data from sites.json
.then((response) => {
  return response.json();
})
.then((data) => sites(data));




// ----------------------------------------------------------------

function webring(data) {

    tag.insertAdjacentHTML('beforebegin', `
    <div id="webringInfo">
    <a id="webringName" target="_blank" href='${data.webringInfo[0].webringURL}'>${data.webringInfo[0].webringName}</a>
    <a id="webringMemberList target="_blank" href='${data.webringInfo[0].webringMemberList}'>Member list</a>
    </div>
    `);
}

function sites(data) {
  const regex = /^https:\/\/|\/$/g;
  let list = "";
  let i;

  tag.insertAdjacentHTML('afterbegin', `
  <h2 id="memberCount">Member Count: ${data.webringSites.length}</h2>
  `);

for (i = 0; i < data.webringSites.length; i++) {
    list += `
    <div class="webringMember">
    <ol>
    <li id="siteOwner">${data.webringSites[i].siteOwner}</li>
    <li id="siteName"><a target="_blank" href='${data.webringSites[i].siteURL}'>${data.webringSites[i].siteName.replace(regex, "")}</a></li>
    <li id="siteURL"><a target="_blank" href='${data.webringSites[i].siteURL}'>${data.webringSites[i].siteURL.replace(regex, "")}</a></li>
    <li id="siteTags">${data.webringSites[i].siteTags}</li>
    <li id="siteShortDescription">${data.webringSites[i].siteShortDescription}</li>
    <li id="siteLongDescription">${data.webringSites[i].siteLongDescription}</li>
    </ol>
    </div>
    `;
}

tag.insertAdjacentHTML('beforeend', `${list}`);
}