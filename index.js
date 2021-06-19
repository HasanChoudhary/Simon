var sequnce = [];
var level = 0;
var running = false;
var playerClicks = 0;

$(document).keydown(function (){
    if (running == false){
        game();
    }
    
});

$(".btn").click(function (){
    buttonClicked(null, this.id);
    if(numToName(sequnce[playerClicks]) != this.id){
        var sound = new Audio(("sounds/wrong.mp3")); 
        sound.play();
        $("h1").text("Game Over, Press Any Key To Restart");
        $("body").addClass("game-over");
        setTimeout(function () {$("body").removeClass("game-over")}, 250);
        sequnce = [];
        level = 0;
        running = false;
        playerClicks = 0;
        return;
    }

    playerClicks++;

    if(playerClicks == sequnce.length){
        playerClicks = 0;
        level++;
        setTimeout(function () {game()}, 500);;
    }
});

function game(){
    running = true;
    $("h1").text("Level "+ (level + 1));
    sequnce.push(randomNumber());
    buttonClicked(sequnce[level]);
}

function randomNumber(){
    return(Math.floor(Math.random()*4));
}

function buttonClicked(num = null, color = "na"){
    if(num != null){
        color = numToName(num);
    }
    $(("."+color)).addClass("pressed");
    var sound = new Audio(("sounds/"+color+".mp3")); 
    sound.play();
    setTimeout(function () {$("."+color).removeClass("pressed")}, 250);
}

function numToName(num){
    switch(num){
        case 0:
            return "green";
        case 1:
            return "red";
        case 2:
            return "yellow";
        case 3:
            return "blue";
    }
}
