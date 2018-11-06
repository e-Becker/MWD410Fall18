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
*/
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