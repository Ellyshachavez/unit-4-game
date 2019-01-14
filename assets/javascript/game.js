console.log("connected!")

// when screen loads, randomly generate computer total 
// when screen loads, randomly generate 4 crystal totals under 20
// set win to zero
// set loss to zero
// when each crystal is clicked, total appears in users total score box
//add each crystal amount to total
//if user score equals computer score add to wins
// if user goes over computer score add to losses 

var wins;
var losses;
var crystalTotal;
var crystalImages = [$("#crystal-one"),
    $("#crystal-two"),
    $("#crystal-three"), 
    $("#crystal-four")
]
var crystalMin = 1;
var crystalMax = 20;

randomTotal = Math.floor(Math.random() *70 ) + 30;

$("#random-total").text(randomTotal);




//generates 4 random numbers for crystals
for(var i = 0; i < crystalImages.length; i++) {

crystalImages[i] =  Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin) * crystalImages.length;
crystalImages[i] = parseInt(crystalImages[i]);
console.log(typeof crystalImages[i]);

var crystal = $("<div>");
    crystal.attr({
    "class": 'crystal',
       "random_total": crystalTotal   
   });


$("random-total").append($("crystal-total"), crystalImages[i]);

$(".clickImage").on("click", function() {
    console.log(crystalTotal);
});

}


