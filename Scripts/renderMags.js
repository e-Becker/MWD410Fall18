$(window).load(function () {
    var jsonURL = "products.json";
    $.getJSON(jsonURL, function (json)
    {
        var magList= "";

        $.each(json.products, function () {
            magList += '<li><a href="' + this.magLink + '" class="button" margin="100px"><img src="' + this.imgPath + '" width="45%" height="30%"></a></li>';
        });

        $('#productsList').append(magList).html();
    });
});