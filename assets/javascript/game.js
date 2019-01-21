$(document).ready(function()
{   //assign variables
    var randomNumMatch = 0;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var charecterValue = 0;
    
    var imageIds = ["#pacman", "#redGhost", "#blueGhost", "#pinkGhost", "#orangeGhost"];
    

    //get html text elements 
    var randomNumMatchText = document.getElementById("matchNum");
    var totalScoreText = document.getElementById("score");
    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    
    //create random number between 19 and 120
    randomNumMatch = genRandomNum(19, 120);
    
    //add random number to screen
    $(randomNumMatchText).text(randomNumMatch);

    //add random value to images
    for(i = 0; i < imageIds.length; i++)
    {
        $(imageIds[i]).attr("value", genRandomNum(1, 12));
    }
    
    //check to see if those values generated are unique 
    isunique(imageIds)

    //get the value of the image add it to your score and check if you win or lose
    $(".rngImages").on("click", function()
    {
        //check value of image clicked on
        charecterValue = $(this).attr("value");
        charecterValue = parseInt(charecterValue);
        
        //add image value to total score
        totalScore += charecterValue;

        //display score to screen
        $(totalScoreText).text(totalScore);

        //win/loss condition
        if(totalScore === randomNumMatch)
        {
            wins++;
            $(winsText).text(wins);
            reset();
        }
        else if(totalScore > randomNumMatch)
        {
            losses++;
            $(lossesText).text(losses);
            reset();
        }

    });
    //function to generate random number
    function genRandomNum(min, max)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    //reset
    function reset()
    {
        randomNumMatch = genRandomNum(19, 120);

        $(randomNumMatchText).text(randomNumMatch);

        totalScore = 0;

        $(totalScoreText).text(totalScore);
        
        for(i = 0; i < imageIds.length; i++)
        {
            $(imageIds[i]).attr("value", genRandomNum(1, 12));
            
        }
        isunique(imageIds)
        
    }
    //checks to see if all the images values have a unique value
    function isunique(arr)
    {
        var charecterValue1 = 0;
        var charecterValue2 = 0;
        var hasdup = false;
        do
        {
            for(i = 0; i <= arr.length; i++)
            {
    
                for(j = i; j < arr.length; j++)
                {   
                    charecterValue1 = parseInt($(arr[i]).attr("value"));
                    charecterValue2 = parseInt($(arr[j]).attr("value"));
                    if(i != j && charecterValue1 == charecterValue2)
                    {
                     $(arr[j]).attr("value", genRandomNum(1, 12));
                     isunique(imageIds);
                     hasdup = true;
                    }
                    else
                    {
                        hasdup = false;
                    }
                }
            }
        } while (hasdup == true); 
        
    }
    
});

