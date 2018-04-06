var emotion = ["excited", "hungry", "awkward", "bored", "confused"];
var main = $("body");
var btns = main.find("#buttons");
var emotionBtn; var newEmotion; var clickedBtn; var emotionStill; var emotionAnimate; var emotionDiv;

renderButtons();
addEmotion();

//this function creates the buttons
function renderButtons() {
    for (var i = 0; i < emotion.length; i++) {
        emotionBtn = $("<button>");
        emotionBtn.addClass("emotionBtn");
        emotionBtn.attr("data-emotion", emotion[i]);
        emotionBtn.text(emotion[i]);
        btns.append(emotionBtn);       
    }
                console.log("Main: ", main);
                console.log("emotionBtn: ", emotionBtn);
                console.log("Btns: ", btns);
}

//this function adds new buttons
function addEmotion(){ 
    $("#add-emotion").on("click", function(event) {
        newEmotion = $("#emotion-input").val().trim();
        emotion.push(newEmotion);
        $("#buttons").empty();
        renderButtons();
    });
}

//this gets gifs from the API
$(btns).on("click", ".emotionBtn", function(){
    var emotionValue = $(this).attr("data-emotion");
    console.log("emotionValue = ", emotionValue);
    var queryURL =  "https://api.giphy.com/v1/gifs/search?q=" + emotionValue + "&apikey=XgGDNaFiZqTKi1YvKoMcDk5gkc2LGGzd&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }) 
    .then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {

            var emotionDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            emotionDiv.append(p);
            emotionDiv.append(emotionStill);
            $("#gifs").prepend(emotionDiv);
           
            //inserting the image tag.
            emotionStill = $("<img>");
            emotionStill.attr("src", results[i].images.fixed_height.url);
            emotionStill.attr("data-still", results[i].images.fixed_height_still.url);
            emotionStill.attr("data-animate", results[i].images.fixed_height.url);
            
            //setting the default data-state to animate.
            emotionStill.attr("data-state","animate");

            //toggling between a moving and still
            emotionStill.on("click", function() {
                console.log("This is getting clicked!!!!");
                var state = $(this).attr("data-state");
                if (state === "animate") {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");          
                    console.log("I just made this gif still");
                } else {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");              
                    console.log("i just made this gif an image");
                    }
                });
         };
    });
});





/*


$("#gifs").on("click", function(){
var state = $(this).attr("data-state");
console.log("state = ", state);
if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
    emotionDiv.append(emotionAnimate);
    $("#gifs").prepend(emotionDiv);
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
    emotionDiv.append(emotionStill);
    $("#gifs").prepend(emotionDiv);

console.log("emotionAnimate = ", emotionAnimate);     

};
});


$(btns).on("click", ".emotionBtn", function() {
    var state = $(this).attr("data-state");
    console.log("state = ", state);
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
     
});



function stillGifs() {
    var emotionGifs = $("<img>");
    emotionGifs.addClass("pauseGifs");
    emotionGifs.addState("stillGifs")
    }
*/



