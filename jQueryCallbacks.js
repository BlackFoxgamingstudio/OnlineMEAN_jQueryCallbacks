$(document).ready(function(){
  $('#funButton').click(function(){
    console.log("I am a callback!")
  });
});

function clickedOn(){
  console.log("I am also a callback but I was defined elsewhere");
}

// Challenge 1. when the #funButton is clicked, using only the code written here,
// instead of using the anonymous function as the callback, use the
// clickedOn function as the callback.  Verify your callback doesn't run
// until the button is actually CLICKED!

// Challenge 2. create a new function that appends your name to the body [hardcode your name]
// don't let this function run until the user clicks the #nameButton
