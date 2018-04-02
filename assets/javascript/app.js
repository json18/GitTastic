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


$(btns).on("click", function(){
    console.log("BUTTON WAS CLICKED!!!");
    clickedBtn = $(this).;
    console.log("clickedBtn: ", clickedBtn);

});






