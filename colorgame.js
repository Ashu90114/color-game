var colors= generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numsquare=6;

easyBtn.addEventListener("click" , function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numsquare=3;
	colors = generateRandomColors(3);
	pickedcolor =pickcolor();
	colorDisplay.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue" ;
	messageDisplay.textContent="";

});

hardBtn.addEventListener("click" , function(){	
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numsquare=6;
	colors = generateRandomColors(6);
	pickedcolor =pickcolor();
	colorDisplay.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue" ;
	messageDisplay.textContent="";
});

colorDisplay.textContent = pickedcolor;

resetButton.addEventListener("click" , function(){
	//generate all new colors
	colors = generateRandomColors(numsquare);
	//pick a new random colors from arrray
	pickedcolor = pickcolor();
	//change colordisplay to match picked color
	colorDisplay.textContent = pickedcolor;
	this.textContent="New Colors"

	messageDisplay.textContent="";

	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue" ;

});

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
 	squares[i].style.backgroundColor = colors[i];

 	//add click listeners to squares
 	squares[i].addEventListener("click", function(){
 	//grab color of clicked square
 	var clickedColor = this.style.backgroundColor;
 	//compare color to pickedcolor
 	if(clickedColor === pickedcolor){
 		messageDisplay.textContent="Correct!";
 		resetButton.textContent = "play Again?";
 		changeColors(clickedColor);
 		h1.style.backgroundColor=clickedColor;
 	}else{
 		this.style.backgroundColor="#232323";
 		messageDisplay.textContent = "Try Again";
 	}
 });
}

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
	//change each color to match given color	
	 squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[]
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
		//get random color and push into arr

	}
		
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 255);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 255);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 255);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}