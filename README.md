# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla Javascript
- Leaflet JS
- Flexbox
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

#### Building with HTML

Using the basic knowledge of containers for each component and element, it was a great refresher on how to structure on complex formats by breaking down the template into smaller chunks. While the container that holds the details of the search results can be seen as overlaping the map, the parent container that holds the title, the search bar can also include the details.

#### CSS Magic

Overlapping the details container was achieved by using the flexbox styling to align the items in a column, and with the margin porperty for the details area. An issue I had when using the background image property using margin also to push space around the title and search bar areas had pushed out the whole image. I wish to further improve on this aspect to reduce the number of lines for my CSS. Another problem was trying to set the border lines, while able to remove the first border line to match the design the issue of reducing the size of the border became a challenge, while using the gradient value I must further learn the fundamental of border colouring and gradients.

```css
.results {
	position: relative;
	padding: 0 25px;
	width: 25%;
	border-left: solid 2px;
	border-image: linear-gradient(
			hsl(0, 0%, 100%),
			hsl(0, 0%, 79%),
			hsl(0, 0%, 100%)
		) 0 100% 0;
}

.results:first-child {
	border-left: none;
}
```

#### Risky use of client-side Javascript

When implementing the Javascript immediately when beginning I was worried of the use of API keys and the lack of security this challenge this posed, I feel for challenges involving API keys it should use open source without registration where no credentials are not needed nor a limit in the event someone decides to hit the limit of requests.

I believe using error handling is a great way of dealing with so many issues that requests could face. Using the throw keyword allows for smoother client side experience to notify the user of the input. While it is a concept I am still trying to find more ways to implement it, especially with testing software such as Jest.

```js
if (response.status === 422) throw alert("Invalid domain/IP address used");
```

Using the scopes to my advantage really helped my understanding of the Leaflet JS library. I learnt of the map tiles implementation, I had to re render to template everytime I sent a new request to the search, using .remove() to remove the rendering of the map and render the map again through each event listener.

```js
let myMap;
myMap = L.map("mapid").setView([json.location.lat, json.location.lng], 17);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 20,
	attribution:
		'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(myMap);

let marker = L.marker([json.location.lat, json.location.lng], {
	icon: mapIcon,
}).addTo(myMap);
```

### Continued development

There is still so much to learn on front-end development, interactivity is pivital for smooth user experience, accessibility is neccessary for an all inclusive experience. I wish to put my knowledge and develop with different design features such as accordions and modals, drag and drop is an interesting yet creative API that I wish to deveop my skills further.

### Useful resources

- [Leaflet JS Quick Start](https://leafletjs.com/examples/quick-start/) - Understanding the library enabled me to understand the concept of mapping and the library. It gave me the concepts of initlalizing tiles based on different open sources and APIs.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@Salsabaga](https://www.frontendmentor.io/profile/Salsabaga)
