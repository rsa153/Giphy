var topics = ["monkey", "elephant", "sloth", "leopard"];

function displayAnimal() {
    var input = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        input + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            $("#animal-view").empty();
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var animalDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height_still.url);
                animalImage.attr("data-still", results[i].images.fixed_height_still.url);
                animalImage.attr("data-animate", results[i].images.fixed_height.url);
                animalImage.attr("data-state", "still");
                animalImage.addClass("image");
                animalDiv.append(p);
                animalDiv.append(animalImage);
                $("#animal-view").prepend(animalDiv);
            }
            $(".image").on("click", function () {
                var state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });

        });
}

function renderButtons() {
    $("#button-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("animal-class");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#button-view").append(a);
    }
}

$("#add-animal").on("click", function (event) {
    event.preventDefault();
    var input = $("#animal-input").val().trim();
    topics.push(input);
    renderButtons();
});

$(document).on("click", ".animal-class", displayAnimal);

renderButtons();