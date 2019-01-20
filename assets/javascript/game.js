$(document).ready(function()
{   //assign variables
    var randomNumMatch = 0;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    
    var imageIds = ["#pacman", "#redGhost", "#blueGhost", "#pinkGhost", "#orangeGhost"];

    //add images to the above array
    // for(i = 0; i < 5; i++)
    // {
    //     images[i] = new Image();
    //     switch (i)
    //     {
    //         case 0:
    //         images[i] = "assets/images/PacMan.png"
    //         break;

    //         case 1:
    //         images[i] = "assets/images/blinky.png"
    //         break;
            
    //         case 2:
    //         images[i] = "assets/images/inky.png"
    //         break;

    //         case 3:
    //         images[i] = "assets/images/pinky.png"
    //         break;
            
    //         case 4:
    //         images[i] = "assets/images/clyde.png"
    //         break;
    //     }
    // }
    

    //get html text elements 
    var randomNumMatchText = document.getElementById("matchNum");
    var totalScoreText = document.getElementById("score");
    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    
    //create random number between 30 and 60
    randomNumMatch = genRandomNum(30, 60);
    
    //add random number to screen
    $(randomNumMatchText).text(randomNumMatch);

    // //create images from the array and give them values
    // for(i = 0; i < 5; i++)
    // {
    //     var pacmanImages = $("<img>");
    //     pacmanImages.addClass("rngImages");
    //     pacmanImages.attr("src", images[i]);
    //     pacmanImages.attr("value", genRandomNum(1, 15));
    //     $(".col1").append(pacmanImages);
    // }
    // console.log(pacmanImages);
    for(i = 0; i < imageIds.length - 1; i++)
    {
        $(imageIds[i]).attr("value", genRandomNum(1, 15));
    }
    //get the value of the image add it to your score and check if you win or lose
    $(".rngImages").on("click", function()
    {
        //check value of image clicked on
        var charecterValue = $(this).attr("value");
        charecterValue = parseInt(charecterValue);
        totalScore += charecterValue;
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
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    //reset
    function reset()
    {
        randomNumMatch = genRandomNum(30, 60);

        $(randomNumMatchText).text(randomNumMatch);

        totalScore = 0;

        $(totalScoreText).text(totalScore);
        
        for(i = 0; i < imageIds.length - 1; i++)
        {
            $(imageIds[i]).attr("value", genRandomNum(1, 15));
        }
    }
    
});

