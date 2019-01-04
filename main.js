var search = ''
var buttonArray = ["Thor","Scarlet Witch", "Iron Man","The Hulk"];

$("#confirm").on('click',function()
{
    var search = $("#user-search").val();
    console.log(search);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search + "&api_key=BLI6XzY5uNIdxpVI8GGM4wJFZAyNm8gy&limit=10"; 

    $.ajax
    ({
        url: queryURL,
        method: "GET"
    }).then(function(response) 
        {
          var results = response.data;
          console.log(results);
          $("#gifDiv").empty();
            for (var i = 0; i < results.length; i++) 
            {
                console.log(results[i].rating);
                var gifDiv = $("<div>");
                gifDiv.addClass('col-sm-3 col-md-3 col-lg-3');
                var h3 = $("<p>").text("Rating: " + results[i].rating.toUpperCase());
                var gifDisplay = $("<img>");
                gifDisplay.attr("src", results[i].images.original_still.url);
                gifDisplay.attr("data-animate",results[i].images.original.url);
                gifDisplay.attr("data-still",results[i].images.original_still.url);
                gifDisplay.addClass('gif');
                gifDisplay.attr("data-animate",results[i].images.original.url);
                gifDisplay.attr("data-state","still");
                gifDiv.append(h3);
                gifDiv.append(gifDisplay);
                $("#gifDiv").append(gifDiv);
            }
        });
if(buttonArray.indexOf(search) === -1)
{
    var button = $("<button>");
    button.addClass('reSearch');
    button.text(search);
    button.attr('term',search);
    $("#search-buttons").append(button);
    buttonArray.push(search);
}

  
});

$(document).on("click", ".gif", function()
{
    var state = $(this).attr('data-state');
    console.log(state);
    if (state === "still") 
      {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else 
      {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});

$(document).on("click", ".reSearch", function()
{
    var search = $(this).text();
    console.log(search);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search + "&api_key=BLI6XzY5uNIdxpVI8GGM4wJFZAyNm8gy&limit=10"; 

    $.ajax
    ({
        url: queryURL,
        method: "GET"
    }).then(function(response) 
        {
          var results = response.data;
          console.log(results);
          $("#gifDiv").empty();
            for (var i = 0; i < results.length; i++) 
            {
                console.log(results[i].rating);
                var gifDiv = $("<div>");
                gifDiv.addClass('col-sm-3 col-md-3 col-lg-3 gifBox');
                var h3 = $("<p>").text("Rating: " + results[i].rating.toUpperCase());
                var gifDisplay = $("<img>");
                gifDisplay.attr("src", results[i].images.original_still.url);
                gifDisplay.attr("data-animate",results[i].images.original.url);
                gifDisplay.attr("data-still",results[i].images.original_still.url);
                gifDisplay.addClass('gif');
                gifDisplay.attr("data-animate",results[i].images.original.url);
                gifDisplay.attr("data-state","still");
                gifDiv.append(h3);
                gifDiv.append(gifDisplay);
                $("#gifDiv").append(gifDiv);

            }
        });
  
});

$("#user-search").on("keyup", function(event) 
{
    event.preventDefault();
    if (event.keyCode === 13) 
    {
      $("#confirm").click();
    }
});

function buttonGen()
{
    $("#search-buttons").empty();
    for(var i = 0; i < buttonArray.length; i++)
    {
        var button = $("<button>");
        button.addClass('reSearch').text(buttonArray[i]);
        button.attr('term',buttonArray[i]);
        $("#search-buttons").append(button);
    }
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    "thor" + "&api_key=BLI6XzY5uNIdxpVI8GGM4wJFZAyNm8gy&limit=10"; 
    $.ajax
    ({
        url: queryURL,
        method: "GET"
    }).then(function(response) 
        {
          var results = response.data;
          console.log(results);
          $("#gifDiv").empty();
            for (var i = 0; i < results.length; i++) 
            {
                console.log(results[i].rating);
                var gifDiv = $("<div>");
                gifDiv.addClass('col-sm-3 col-md-3 col-lg-3 gifBox');
                var h3 = $("<p>").text("Rating: " + results[i].rating.toUpperCase());
                var gifDisplay = $("<img>");
                gifDisplay.attr("src", results[i].images.original_still.url);
                gifDisplay.attr("data-animate",results[i].images.original.url);
                gifDisplay.attr("data-still",results[i].images.original_still.url);
                gifDisplay.addClass('gif');
                gifDisplay.attr("data-animate",results[i].images.original.url);
                gifDisplay.attr("data-state","still");
                gifDiv.append(h3);
                gifDiv.append(gifDisplay);
                $("#gifDiv").append(gifDiv);

            }
        });

}
window.onload = buttonGen();
