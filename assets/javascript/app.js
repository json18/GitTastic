var emotion = ["excited", "hungry", "awkward", "bored", "confused"];
var main = $("body");
var btns = main.find("#buttons");

renderButtons();

function renderButtons() {
    for (var i = 0; i < emotion.length; i++) {
        var emotionBtn = $("<button>");
        emotionBtn.addClass("emotionBtn emotion emotionBtncolor");
        emotionBtn.attr("data-emotion", emotion[i]);
        emotionBtn.text(emotion[i]);
        btns.append(emotionBtn);       
    }
                console.log("this works");
                console.log("Main: ", main);
                console.log("emotionBtn: ", emotionBtn);
                console.log("Btns: ", btns);
}

$("#add-emotion").on("click", function(event) {
    var newEmotion = $("#emotion-input").val().trim();
    emotion.push(newEmotion);
    $("#buttons").empty();
    renderButtons();
});





