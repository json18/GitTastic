var place = ["Alaska", "Barbados", "Cancun", "Denver", "Fullerton", "Georgia", "Hawaii", "Iowa", "Japantown", "Koreatown", "Los Angeles", "Manhattan", "Nebraska", "Omaha", "Philadelphia", "Queens", "Riverside", "Seattle", "Washington D.C."];
var main = $("body");
var btns = main.find("#buttons");

renderButtons();

function renderButtons() {
    for (var i = 0; i < place.length; i++) {
        var placeBtn = $("<button>");
        placeBtn.addClass("placebtn place placebtncolor");
        placeBtn.attr("data-place", place[i]);
        placeBtn.text(place[i]);
        btns.append(placeBtn);       
    }
                console.log("this works");
                console.log("Main: ", main);
                console.log("placeBtn: ", placeBtn);
                console.log("Btns: ", btns);
}

$("#add-place").on("click", function(event) {
    var newPlace = $("#place-input").val().trim();
    place.push(newPlace);
    $("#buttons").empty();
    renderButtons();
});





