console.log("connected!")

// when screen loads, randomly generate computer total 
// when screen loads, randomly generate 4 crystal totals under 20
// set win to zero
// set loss to zero
// when each crystal is clicked, total appears in users total score box
//add each crystal amount to total
//if user score equals computer score add to wins
// if user goes over computer score add to losses 

var wins=0;
var losses=0;
var crystalTotal;
var userScore= 0;

$("#user-score").text(userScore);

//tried a for loop and it didn't work out
var crystalImages = [$("#crystal-one"),
    $("#crystal-two"),
    $("#crystal-three"), 
    $("#crystal-four")
]
var crystalMin = 1;
var crystalMax = 11;

//picks random computer number
randomTotal = Math.floor(Math.random() *25 ) + 25;

$("#random-total").text(randomTotal);


//tried for loop, couldn't get values to append to crystals indivudally 
//creates random numbers for each crystal
crystalOne = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);

crystalTwo = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);

crystalThree = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);

crystalFour = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);

console.log(crystalOne, crystalTwo);


$("#crystal-one").on('click', function(){
    userScore += crystalOne;
    $("#user-score").text(userScore); 
        if (userScore === randomTotal){
          wins++;
          $("#wins").text(wins);
          playAgain();
        }
        else if ( userScore > randomTotal) {
          losses++;        
        $("#losses").text(losses);
        playAgain();
        }   

        console.log($("#user-score"));
})  

$("#crystal-two").on("click", function(){
    userScore += crystalTwo;
    $("#user-score").text(userScore); 
        if (userScore === randomTotal){
          wins++;
          $("#wins").text(wins);
          playAgain();
        }
        else if ( userScore > randomTotal) {
            losses++;        
          $("#losses").text(losses);
          playAgain();
          }  
})  

$("#crystal-three").on("click", function(){
    userScore += crystalThree;
    $("#user-score").text(userScore); 
        if (userScore === randomTotal){
          wins++;
          $("#wins").text(wins);
          playAgain();

        }
        else if ( userScore > randomTotal) {
            losses++;        
          $("#losses").text(losses);
          playAgain();
          }   
})  


$("#crystal-four").on("click", function(){
    userScore += crystalFour;
    $("#user-score").text(userScore); 
        if (userScore === randomTotal){
          wins++;
          $("#wins").text(wins);
          playAgain();
        }
        else if ( userScore > randomTotal) {
            losses++;        
          $("#losses").text(losses);
          playAgain();
          }  
}) 


function playAgain (){
    randomTotal = Math.floor(Math.random() *25 ) + 25;

    $("#random-total").text(randomTotal);
    
    
    crystalOne = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);

    crystalTwo = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);
    
    crystalThree = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);
    
    crystalFour = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);

        userScore = 0;
        $("#user-score").text(userScore);
   }

