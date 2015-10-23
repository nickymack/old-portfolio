
var Animal = function(s, f, n) {
  this.speed = s;
  this.focus = f;
  this.name = n;
  this.position = 0;
  this.report = function() {
    return this.name + " is at " + this.position;
  };
  this.run = function(){
    if(this.focus >= (Math.random() *10)) { //*assigning a random number between 1 and 10 for to measure their focus against, like are they more focused than this?*//
      this.position += this.speed; //*go from their position at their speed, or add their speed*//
    }
  };
}  
 
 var turtle = new Animal (1, 8, "Tommy"),
      rabbit = new Animal (1.5, 2, "Ronald"),
      fox = new Animal (2.5, 3, "Farrah"),
      goat = new Animal (2,5, "Gale");
 
var distance = 500;
 
while(turtle.position < distance && rabbit.position < distance && fox.position < distance && goat.position < distance) {
  turtle.run(); //*set up above*//
  rabbit.run();
  fox.run();
  goat.run();
};
 
console.log(turtle.report());
console.log(rabbit.report());
console.log(fox.report());
console.log(goat.report());

var winner;
if (turtle.position >= 500)
{ winner = turtle}
else if(rabbit.position >= 500)
{winner = rabbit}
else if(fox.position >= 500)
{winner = fox}
else if(goat.position >= 500)
{winner = goat};


$(document).ready(function() {
    
    $(".animalBasics").on("click",".animalButton", function() {
        $(this).closest(".animalBasics").find(".levels").slideToggle();
        });
    
    $("#resultsButton").on("click", function() {
        var results = $("<h1>" + winner.name + " is the winner!</h1>").attr("id", "winnerLine");
        console.log(winner.report());
        $("#resultsSection").append(results);
        $("#resultsButton").remove();
    });
    
});

s