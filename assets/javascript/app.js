var emotion = ["excited", "hungry", "awkward", "bored", "confused"];
var main = $("body");
var btns = main.find("#buttons");
var emotionBtn; var newEmotion; var clickedBtn;

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
                console.log("this works");
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


$(btns).on("click", ".emotionBtn", function(){
    console.log("BUTTON WAS CLICKED!!!");
    console.log("clickedBtn: ", clickedBtn);
    console.log($(this));
    var emotionValue = $(this).attr("data-emotion");
    console.log(emotionValue);
    var queryURL =  "https://api.giphy.com/v1/gifs/search?q=" + emotionValue + "&apikey=XgGDNaFiZqTKi1YvKoMcDk5gkc2LGGzd";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }) 
    .then(function(response) {
        console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var emotionDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var emotionImage = $("<img>");
            emotionImage.attr("src", results[i].images.fixed_height.url);
            emotionDiv.append(p);
            emotionDiv.append(emotionImage);
            $("#gifs").prepend(emotionDiv);
        }
    });
});

 