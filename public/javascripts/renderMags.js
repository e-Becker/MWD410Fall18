//fires when other page content has loaded
/*
$(window).load(function () {
    var jsonURL = "../products.json";
    $.getJSON(jsonURL, function (json)
    {
        var magList= "";

        $.each(json.products, function () {
            magList += '<li><a href="' + this.magLink + '" class="button" margin="100px"><img src="' + this.imgPath + '" width="45%" height="30%"></a></li>';
        });

        $('.mag-deposit').append(magList).html();
    });
});

var data = {
    "products": [
        {
            "magName": "Moby Dick",
            "magLink": "../moby-dick.html",
            "imgPath": "images/cbp/moby-dick/titlepage.jpg"
        },
        {
            "magName": "Page Blanche",
            "magLink": "../page-blanche.html",
            "imgPath": "../images/cbp/page-blanche/titlepage.jpg"
        },
        {
            "magName": "Children's Literature",
            "magLink": "../childrens-lit.html",
            "imgPath": "images/cbp/childrens-literature/titlepage.png"
        }
    ]
}

data.products.forEach( function(obj){
    var img = new Image();
    img.src = obj.imgPath;
    img.setAttribute("class", "banner-img");
    document.getElementById("introblocks").appendChild(img);
});
*/

const eproducts = [
    {
        magName: "NOMS",
        genre: "Food",
        magLink: "NOMS.html",
        imgPath:"images/cbp/noms.jpg",
        magClass: "one_third first",
    },
    {
        magName: "Trendsetter",
        genre: "Fashion",
        magLink: "Trendsetter.html",
        imgPath:"images/cbp/trendy.jpg",
        magClass: "one_third"
    },
    {
        magName: "ModernFoodie",
        genre: "Food",
        magLink: "ModernFoodie.html",
        imgPath:"images/cbp/modernf.jpg",
        magClass: "one_third"
    },
    {
        magName: "Connoisseur",
        genre: "Food",
        magLink: "Connoisseur.html",
        imgPath:"images/cbp/connoisseur.jpg",
        magClass: "one_third first"
    }
];

window.onload = function() {
    document.getElementById("introblocks").innerHTML = `
    <h6 class="heading btmspace-50">eMagazines (${eproducts.length} results)</h6>
    <p class="footer">These ${eproducts.length} eMagazines were added to your library recently. Start reading!</p>
    <ul class="nospace elements">
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
    </ul>
    `
}
