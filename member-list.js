const header = document.getElementById('header');
const info = document.getElementById('info');
const tbody = document.getElementById('tbody');
const footer = document.getElementById('footer');

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

    header.insertAdjacentHTML('afterbegin', `
    <nav id="webringInfo">
    <a id="webringName" target="_blank" href='${data.webringInfo[0].webringHome}'>${data.webringInfo[0].webringName}</a>
    <a id="webringMemberList target="_blank" href='${data.webringInfo[0].webringMemberList}'>Member list</a>
    </nav>
    <h1>Loop Ring Member List</h1>
    `);

    footer.insertAdjacentHTML('beforeend', `Intrested in joining the Loop Ring? Checkout <a href="${data.webringInfo[0].webringHome}">the docs</a> and add yourself!`);
}

function sites(data) {
  const regex = /^https:\/\/|\/$/g;
  let list = "";
  let i;

  info.insertAdjacentHTML('afterbegin', `
  <h2 id="memberCount">Member Count: ${data.webringSites.length}</h2>
  `);

for (i = 0; i < data.webringSites.length; i++) {
    list += `
    <tr>
      <td class="siteOwner"><span class="label">Owner:</span><span class="data">${data.webringSites[i].siteOwner}</span></td>
      <td class="siteName"><span class="label">Name:</span><span class="data"><a target="_blank" href='${data.webringSites[i].siteURL}'>${data.webringSites[i].siteName.replace(regex, "")}</a></span></td>
      <td class="siteURL"><span class="label">URL:</span><span class="data"><a target="_blank" href='${data.webringSites[i].siteURL}'>${data.webringSites[i].siteURL.replace(regex, "")}</a></span></td>
      <td class="siteTags"><span class="label">Tags:</span><span class="data">${data.webringSites[i].siteTags}</span></td>
      <td class="siteShortDescription"><span class="label">Summary:</span><span class="data">${data.webringSites[i].siteShortDescription}</span></td>
      <td class="siteLongDescription"><span class="label">Description:</span><span class="data">${data.webringSites[i].siteLongDescription}</span></td>
    </tr>
    <div class="gap"></div>
    `;
}

tbody.insertAdjacentHTML('beforeend', `${list}`);


}