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
            "magLink": "library/moby-dick.html",
            "imgPath": "images/moby-dick/titlepage.jpg"
        },
        {
            "magName": "Page Blanche",
            "magLink": "../library/page-blanche.html",
            "imgPath": "../images/page-blanche/titlepage.jpg"
        },
        {
            "magName": "Children's Literature",
            "magLink": "../library/childrens-lit.html",
            "imgPath": "../images/childrens-literature/titlepage.png"
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
        magLink: "library/NOMS.html",
        imgPath:"images/noms/titlepage.jpg"
    },
    {
        magName: "Trendsetter",
        genre: "Fashion",
        magLink: "library/trendsetter.html",
        imgPath:"images/trendsetter/titlepage.jpg"
    },
    {
        magName: "ModernFoodie",
        genre: "Food",
        magLink: "library/modernfoodie.html",
        imgPath:"images/modern-foodie/titlepage.jpg"
    },
    {
        magName: "Connoisseur",
        genre: "Food",
        magLink: "library/connoisseur.html",
        imgPath:"images/connoisseur/titlepage.jpg"
    }
];

window.onload = function() {
    document.getElementById("introblocks").innerHTML = `
    <h6 class="heading btmspace-50">eMagazines (${eproducts.length} results)</h6>
    <p class="footer">These ${eproducts.length} eMagazines were added recently. Check back soon for updates.</p>
    <ul class="nospace group">
    ${eproducts.map(function(tempMag) {
        return `
        <li class="one_third">
        <article>
            <div class="emag">
                <h6 class="heading">${tempMag.magName}</h6>
                    <p> Click to read </p>
            </div>
                <a href="${tempMag.magLink}" class="button" margin="100px">
                    <img class="imgMag" src="${tempMag.imgPath}">
                </a>
            <footer><a href="#">More Details</a></footer>
        </article>
        </li>
        `
    }).join('')}  
    </ul>
    `
}
