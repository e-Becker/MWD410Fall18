# :notebook_with_decorative_cover: &nbsp;IRIS, MWD410 Final

Iris is a browser based E-Reading application housing a library of both E-Magazines and E-Books. Featuring dynamically loading products, and a functioning registry & login accompanied with MongoDB server-side storage. The project is hosted through the University of Hartford. Students operated with an AGILE workflow, and as such, not everything that was developed for the site made it into the final version. In the process of creating the website, students configured an Ubuntu 16.04 server to host the website.

The site was temporarily hosted through the University of Hartford, and is no longer available. 


## :information_source: &nbsp;Walkthrough 

Here is the home page, which contains navigation to the rest of the site, as well as featured items, news, and affiliated content. The site is responsive for desktop and mobile view using Bootstrap CSS.

![1544553561918](/documentation/homepage.png)

Hitting Login reveals the login screen where a user can verify their information against the database.

![login](/documentation/login.png)

If a user does not have an account they can hit Sign Up, where a user can enter their information.

![register](/documentation/register.png)

Once a user has an account they can log in and view their profile. Clicking the profile button reveals recommended E-Magazines and E-Books and subscribed content. Epubs are unavailable without registration.

![E-Books](/documentation/E-Books.png)

Our Epubs are loaded for the reader using [BiB/i](https://github.com/satorumurmur/bibi/releases). This allows us to take advantage of many features of Bibi and EPUB3 for displaying content, and is compatible across devices and browsers.

![sampEPUB](/documentation/sampEPUB.PNG)

Using Bibi, readers can share their favorite content to social media, but prospective readers will not be able to access our content without registering first.

![Social](/documentation/Social.PNG)

Using EPUB3, we can have interactive digital magazines. Typically, digital magazines are simply converted from the physical version without any of the added benefits of digital content.

![bibiFunctionality](/documentation/bibiFunctionality.PNG)


# Usage

Pages are set up using [Pug](https://github.com/pugjs/pug). Each `.pug` file is extended from `layout.pug`, which contains the head and scripts used across the site. Using Pug cut down on development time, a useful tool in the AGILE process.

***
Subscribed magazines are rendered on the user's Profile using `renderMags.js`, which are contained as `.json` data and returned via an onload function.

````
const eproducts = [
{
    magName: "NOMS",
    genre: "Food",
    magLink: "NOMS.html",
    imgPath:"images/cbp/noms.jpg",
    magClass: "one_third first",
},
]

${eproducts.map(function(tempMag) {
        return `
        <li class="${tempMag.magClass}">
          <article class="center">
            <figure><img src="${tempMag.imgPath}">
              <figcaption><a href="${tempMag.magLink}">Read &raquo;</a></figcaption>
            </figure>
            <div class="txtwrap">
                <h6 class="heading">${tempMag.magName}</h6>
                <p> Description&mldr; </p>
            </div>
          </article>
        </li>
        `
    }).join('')} 
````

## :ballot_box_with_check: &nbsp;Future Roadmap

- [ ] Enable SSL (secure socket layers) for data security.
- [ ] Set up an online store to allow users to make subscriptions to hosted products.
- [ ] Allow users to personalize their profile and settings to allow for a more user friendly experience.
- [ ] Create a form to upload new EPUBs directly to the server, instead of manual addition.
- [ ] Set up an email server to better utilize the notification program, and send personalized recommendations to user with Pug.js.

# Project Status

This project has been released as of 12.20.18. Group members may continue to develop this project individually.

# Authors
* Erin Becker <cbecker@hartford.edu>
* Patrick Burke <pburke@hartford.edu>
* Julie Ky <jky@hartford.edu>
* Shannon Thomas <shanthoma@hartford.edu>
