var numberofSquares = 6;

//color list
var colors = generateRandomColors(6);

//goal color
var goalColor = goalColour();

//selectors
var colorSquares = document.querySelectorAll(".square");
var goalDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#space");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#playAgain");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


//easy mode
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberofSquares = 3;
    colors = generateRandomColors(numberofSquares);
    goalColor = goalColour();
    colorDisplay.textContent = goalColor;
    for(var i = 0; i < colorSquares.length; i++){
        if(colors[i]){
            colorSquares[i].style.backgroundColor = colors[i];
        }
        else{
            colorSquares[i].style.display = "none";
        }
    }
    //generate 3 new colors
    //update top squares
    //hide bottom squares
})

//hard mode
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberofSquares = 6;
    colors = generateRandomColors(numberofSquares);
    goalColor = goalColour();
    colorDisplay.textContent = goalColor;
    for(var i = 0; i < colorSquares.length; i++){
        colorSquares[i].style.backgroundColor = colors[i];
        colorSquares[i].style.display = "block";
    }
})




//reset button
resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numberofSquares);
    //pick a new random color from array
    goalColor = goalColour();
    //change colors of squares
    colorDisplay.textContent = goalColor;
    for(var i = 0; i < colorSquares.length; i++){
        colorSquares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});


//score display
goalDisplay.textContent = goalColor;

//add initial colors to squares
for(var i=0; i<colorSquares.length; i++){
    colorSquares[i].style.backgroundColor = colors[i];
    
    //click event
    colorSquares[i].addEventListener("click", function(){
        //grab color of clicked sq
        var clickedColor = this.style.backgroundColor;
        //compare this to goalColor
        //tricky bug = you have to add spacing to rgb 
        if(clickedColor===goalColor){
            changeColors(clickedColor);
            messageDisplay.textContent = "Correct!";
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again!";
        }
        else{
            messageDisplay.textContent = "Try again.";
            this.style.backgroundColor = "#232323";
        }
    });
}

//winning change of colors
function changeColors(color){
    for(var i=0; i<colorSquares.length; i++){
    colorSquares[i].style.backgroundColor = color;
    }
}

//random color
function goalColour(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generate random color
function generateRandomColors(num){
    var arr = [];
    for(var i=0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a red 0, 255
    var randomRed = Math.floor(Math.random() * 256);
    //pick a green
    var randomGreen = Math.floor(Math.random() * 256);
    //pick a blue
    var randomBlue = Math.floor(Math.random() * 256);
    //add spacing to === goalColor
    return "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
}

