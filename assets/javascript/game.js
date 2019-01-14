console.log("connected!")

// when screen loads, randomly generate computer total 
// when screen loads, randomly generate 4 crystal totals under 10
// set win to zero
// set loss to zero
// when each crystal is clicked, total appears in users total score box
//add each crystal amount to total
//if user score equals computer score add to wins
// if user goes over computer score add to losses 

var wins;
var losses;
var randomTotal;
var crystalImages = [$("#crystal-one"), $("#crystal-two"), $("#crystal-three"), $("#crystal-four")]

randomTotal = Math.floor(Math.random() *70 ) + 30;

$("#random-total").text(randomTotal);

//generates 4 random numbers for crystals
for(var i = 0; i < crystalImages.length; i++) {
    var crystalMin = 1;
    var crystalMax = 20;
    // var crystalValue = $("crystal-total");
    // var crystalImages = [$("#crystal-one"), $("#crystal-two"), $("#crystal-three"), $("#crystal-four")]

    crystalImages =  Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);
    console.log(crystalImages);
    $(".clickImage").on("click", function() {
        console.log($(this));
    });

    //    console.log(crystalValue);
//     $("crystal-total").text("", "crystalValue");
    
//     console.log($("crystal-total"));
//     crystalValue = crystalImages[i];
//     crystalValue = ($(this).attr("crystal-total"));
//     crystalValue = parseInt(crystalValue);
//     console.log(crystalImages[i]);

}


