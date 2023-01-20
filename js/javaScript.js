$(function(){

    //animation scroll

    $("ul a:link").click(function(){
        
        //recuperer le href du lien de click
        let id = $(this).attr("href");

        //recuperer le offset left et top
        let dx = $(id).offset().left;
        let dy = $(id).offset().top;

        //animation
        $("html,body").stop().animate({
            scrollLeft:dx,
            scrollTop:dy,
        });
    });//fin click

    //label change smartphone
/*
    var label = $('label[for="mn"]');

    if($("input:checked")){
        label.text("X");
    }

*/
    //animation header

    var img = $("header div#header img");

    //Array img
    var imgArray = new Array();
    imgArray[0] = "img/studio.jpg";
    imgArray[1] = "img/drum.jpg";
    imgArray[2] = "img/guitar.jpg";
    imgArray[3] = "img/mix.jpg";
    imgArray[4] = "img/studio.jpg"

    //animation
    var imgId = 1;

    setInterval(function(){
        imgId += 1; //changer l'image

        $(img).fadeOut("slow", function(){
            $(img).fadeIn("slow").attr('src', imgArray[imgId])
        });

        if (imgId == 4){ 
            imgId = 0}; //repetition
    },7000);

    //classes etoile

    $("section#classes div:last-child").hover(function(){

        var elem = $("section#classes div:last-child p img")

        elem.css("font-weight","bold")

        setInterval(function() {
            $(elem).animate({opacity:0.1},300,"linear",function(){
                    $(this).animate({opacity:1},300);
                });
        },200);


    })


    //#materiel Json

    $.getJSON("../json/data.json", function(data){

        //boucle
        for (var i = 0; i < data.length; i++ ) {

        //Recuperer les donnes individuelment     

            var nom = data[i].nom;
            var type = data[i].type;
            var photo = data[i].photo;

            
            //construir le msg HTML
            var msg = "<div>";
            msg += "<img src=../vignettes/" + photo + " />"; 
            msg += "<h2>" + nom + "</h2>";
            msg += "<h3>" + type + "</h3>";
            msg += "</div>";
            

            //sortir le msg
            //document.querySelector("#sortie").innerHTML = msg;
            $("section#materiel div#materielsortie").append(msg);
            
            $("section#materiel div#materielsortie img").click(function(){
                var index = $(this).parent().index();
                var source = "../grandesPhotos/" + data[index].grandePhoto; 
                
                $("#big img").attr("src", source);
                $("#big").stop().animate({"top":0});

                console.log(grandePhoto)
                
            });//fin click img
            
            //click sur img pour sortir big
            $("#big img").click(function(){

                $("#big").stop().animate({"top":"-100%"});

            });//fin click big


            }//fin boucle

    });//fin get.JSON


});//fin programme





/*

$(function () {

    var nbrImg = $("#film img").length;
    var lgFilm = nbrImg * $("#film img").width();
    $("#film").css("width",lgFilm)
    var i = 0;

    $("#info").text(i+1 + " / " + nbrImg)

    //next
    $("#next").click(function () {
        var posx = $("#film").position().left;
        var newPos = posx - 800;

        if (i < nbrImg - 1) {

            if ($("#film").is(':animated')) {
                //ne fait rien
            } else {
                $("#film").animate({ left: newPos });
                i = i + 1;
                $("#info").text(i+1 + " / " + nbrImg)
            }
        }
    }); // fin de next


    //prev
    $("#prev").click(function () {
        var posx = $("#film").position().left;
        var newPos = posx + 800;

        if (i > 0) {

            if ($("#film").is(':animated')) {
                //ne fait rien
            } else {
                $("#film").animate({ left: newPos });
                i = i - 1;
                $("#info").text(i+1 + " / " + nbrImg)
            }
        }
    }); // fin de next

}); // fin de ready

*/

