# Loop Ring

## What is a webring?

  A webring (or web ring) is a collection of websites linked together in a circular structure, and usually organized around a specific theme, often educational or social. They were popular in the 1990s and early 2000s, particularly among amateur websites.

  To be a part of the webring, each site has a common navigation bar. It contains links to the previous and next site. By selecting next (or previous) repeatedly, the user will eventually reach the site they started at. This is the origin of the term webring. The select-through route around the ring is usually supplemented by a central site with links to all member sites; this prevents the ring from breaking completely if a member site goes offline. The advantage of a webring is that if the user is interested in the topic on one website, they can quickly connect to another website on the same topic. Webrings usually have a moderator who decides which pages to include in the webring. After approval, webmasters add their pages to the ring by 'linking in' to the ring; this requires adding the necessary HTML or JavaScript widget to their site.

*This explaination was borrowed from [Wikipedia](https://en.wikipedia.org/wiki/Webring)*

![](https://github.com/Graycot/loop-ring/assets/72952069/f15b0d3a-b9c9-4d92-abb3-c6eae655a1db)


*This graphic was borrowed from [WebringWorld](http://www.webringworld.org/)*

## What is the Loop Ring?

The Loop Ring is a webring and the upstream code powering [Oring](https://github.com/Graycot/Oring), the open source webring template. The purpose of Loop Ring is to build a community of netizens across the world. Everyone is welcome to join the Loop Ring as long as their website is genuine and sincere. We seek members who Design, Create, Educate, and Express themselves. If you think that you fall into any of those categories, you are welcome here.

#### Sites will not be allowed to participate if they contain any of the following:

    * Bullying, Harassment
    * Sexism, Homophobia/Transphobia
    * Racism, Hate speech.
    * Antisocial / Disturbing behavior
    * Unmarked NSFW content
    * Paid advertisements
    * Malicious code
    * Only a portfolio.

# Join the Loop Ring

![](https://github.com/Graycot/loop-ring/assets/72952069/68cb11ed-05b7-4f4f-a909-25540ecc7257)

## Add the webring code


Add the HTML anchor tags widget to your site.

The webring code should be placed within the `<body>...</body>` tags of your `index.html` file.




### HTML:
The HTML anchor tags widget sends the user to `https://loop.graycot.dev/webring.html?action=____` which then redirects the user according to the specific link they clicked. 


```html
<div class="LoopRingWrapper"> 
    <a href="https://loop.graycot.dev/webring.html?action=prev"> < </a> 
    <a href="https://loop.graycot.dev/webring.html?action=list"> ... </a> 
    <a href="https://loop.graycot.dev/webring.html?action=home"> Loop Ring </a> 
    <a href="https://loop.graycot.dev/webring.html?action=rand"> ? </a> 
    <a href="https://loop.graycot.dev/webring.html?action=next"> > </a>
</div>
```

The **prev** and **next** links will redirect the visitor to a random membersite while your site is pending membership. When you are accepted, the **prev** and **next** links will automatically redirect to the previous and next members in the Loop Ring.

#### Example of the unstyled links:
<div class="LoopRingWrapper"> 
    <a href="https://loop.graycot.dev/webring.html?action=prev"> < </a> 
    <a href="https://loop.graycot.dev/webring.html?action=list"> ... </a> 
    <a href="https://loop.graycot.dev/webring.html?action=home"> Loop Ring </a> 
    <a href="https://loop.graycot.dev/webring.html?action=rand"> ? </a> 
    <a href="https://loop.graycot.dev/webring.html?action=next"> > </a> 
</div>
    
   ---


You can customize the HTML and CSS to make the widget fit your style.

#### Required links:
* `<a href="https://loop.graycot.dev/webring.html?action=prev"></a>`
* `<a href="https://loop.graycot.dev/webring.html?action=home"></a>`
* `<a href="https://loop.graycot.dev/webring.html?action=next"></a>`

#### Optional links:
* `<a href="https://loop.graycot.dev/webring.html?action=list"></a> `
* `<a href="https://loop.graycot.dev/webring.html?action=rand"></a> `

---

## Submit your website to the Loop Ring:

After you have already added the webring widget to your website, the next step is to add yourself to the LoopRing by making a pull request at [github](https://github.com/Graycot/loop-ring/blob/master/sites.json). Include the following data:    
    
```
1. Site Owner:
2. Site Name:
3. Site URL:
4. Three Site Tags:
5. Short Site Description (100 Characters or less):
6. Long Site Description (500 Characters or less):
```
    
#### Example membersite JSON data:
    
```
  {
        "siteOwner": "Graycot",
        "siteName": "Gray Cafe",
        "siteURL": "https://graystea.neocities.org/",
        "siteTags": "Relax, Chat, Explore",
        "siteShortDescription": "Sit back, relax, and admire the beauty of the internet",
        "siteLongDescription": "Hi! I'm Graycot, and this is my little corner of the internet. Gray's tea was the first website I ever built, and it inspired me to pursue web developement as a passion. I love creating beautiful and functional websites, and its my goal to teach others how to build a digital world of their own creation. Come chat at the cafe and explore the wonders of the web."
  }
```

## Note: 
 I usually approve new member-site applications within a few days, but it sometimes takes longer. Do not despair, I will reach your application eventually.
