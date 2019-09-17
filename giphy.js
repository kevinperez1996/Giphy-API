
var animals = ["Dog", "Cat", "Horse", "Monkey", "Elephant"];

function makeButtons (){
    $("#btnDisplay").empty();

    for (var i = 0; i < animals.length; i++){

        var btn = $("<button>");
        btn.addClass("gifButtons")
        btn.attr("gifName", animals[i]);
        btn.text(animals[i]);

        $("#btnDisplay").append(btn);


    };
}
makeButtons();

$("#addbtn").on("click", function(event){
    event.preventDefault();

    var newAnimal = $("#animalAdd").val().trim();
    animals.push(newAnimal);
    makeButtons();



});

$(document).on("click", ".gifButtons", displayGif);

function displayGif() {
    var animal = $(this).attr("gifName");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=QPbdWuyzSoqRRSGMjQ5XoBVCzfwgaI2A&q=" + animal + "&limit=10&offset=0&rating=PG-13&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);



        for (var j = 0; j < 5; j++) {
            


            var gifDiv = $("<div class='animal'>");

            var title = response.data[j].title;
            var t1 = $("<p>").text("Title: " + title);
            gifDiv.append(t1);

            var gifURL = response.data[j].images.original.url;
            var gif = $("<img>").attr("src", gifURL);
            gifDiv.append(gif);

            $("#animalDisplay").prepend(gifDiv);





        }

    });
}
