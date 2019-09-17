
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
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=QPbdWuyzSoqRRSGMjQ5XoBVCzfwgaI2A&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";
    //var state1 = "still"
   // var state2 = "animated"    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);



        for (var j = 0; j < 9; j++) {
            


            var gifDiv = $("<div class='animal'>");

            var rating = response.data[j].rating;
            var t1 = $("<p>").text("Rating: " + rating);
            gifDiv.append(t1);

            var gifURL = response.data[j].images.fixed_height.url;
            var gif = $("<img>").attr("src", gifURL);
            //gif.addClass("change");
            gifDiv.append(gif);

            $("#animalDisplay").prepend(gifDiv);


            
            
            
        }
        
        $(this).on("click", function(){
        alert("HEYY");
        
        
        
        });
    });
}
