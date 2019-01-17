var topics = ["monkey", "elephant", "sloth", "leopard"];

function renderButtons() {
    $("#button-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        // Adding a class
        a.addClass("animalClass");
        // Adding a data-attribute with a value of the movie at index i
        a.attr("data-name", topics[i]);
        // Providing the button's text with a value of the movie at index i
        a.text(topics[i]);
        // Adding the button to the HTML
        $("#button-view").append(a);
    }
}

// This function handles events where one button is clicked
$("#add-animal").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();
    renderButtons();
});
// Calling the renderButtons function at least once to display the initial list of movies
renderButtons();
