
//My array of coffee
var coffeeBtn = ["starbucks", "latte", "pete+coffee", "need+coffee", "but+first+coffee"]
var giphDiv = $("<div class='giph'>");


// displayGiphInfo function re-renders the HTML to display the appropriate content
function displayGiphInfo(event) {
 
   //var query = event.target.id;
   
  var query = $(this).attr("data-name");
 
  console.log(this);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=6jL0PAnyLa9gc0QMk87OJJdgYKjBhkt4&limit=10";

  // Creating an AJAX call for the specific giph button being clicked
  $.ajax({
    url: queryURL,
    method: "GET",
    crossDomain: true
  }).then(function (response) {
    
    

    var gifArray = response.data;
console.log(gifArray)
      var index;
     for (index in gifArray){
        var gif = gifArray[index]
                console.log(gif)
    }    var gif = gifArray[index]

    
console.log(index);
    // for (var j = 0; j < gifArray.length; j++)


      // console.log(j)


    // create img element
    // give the img element an event listener 
    // gif it the src attr from the gif obj
    // append to HTML 


    // Creating a div to hold the giph


    // Storing the rating data

    var rated = gifArray[index].rating;
     console.log(gifArray[index].rating);
    //  Creating an element to have the rating displayed
    var pRated = $("<p>").text("Rating: " + rated);
    giphDiv.append(pRated);

    // Retrieving the URL for the image
    var imgGiph = gifArray[index].url;
    var image = $("<img>").attr("src", imgGiph);

    image.attr("alt", "gif");

    giphDiv.append(image);
    console.log(giphDiv);

    // Putting the entire giph above the previous giphs
    $("#giphs-view").prepend(giphDiv);
    console.log(image)
    // Creating an element to hold the image
    // Appending the image




  })

}

function renderButtons() {

  // Deleting the giphs prior to adding new giphs 
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of giphs 
  for (var i = 0; i < coffeeBtn.length; i++) {

    var a = $("<button>")
    // Adding a class of giphs-btn to our button
    a.addClass("giph-btn");
    // Adding a data-attribute
    a.attr("data-name", coffeeBtn[i]);
    // Providing the initial button text
    a.text(coffeeBtn[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }

  // Then dynamicaly generating buttons for each giphs in the array
  // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
  //       var a = $("<button/>", {
  //           text : coffeeBtn[i],
  //           id : coffeeBtn[i],
  //           class : "giph-btn",

  //           click : function(event){ 
  //               displayGiphInfo(event)
  //           }


  // });

}
// This function handles events where a giph button is clicked
$("#add-giph").on("click", function (event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var giph = $("#giph-input").val().trim();

  // Adding giph from the textbox to our array
  coffeeBtn.push(giph);

  // Calling renderButtons which handles the processing of our giph array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "giph-btn"
$(document).on("click", ".giph-btn", displayGiphInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();
