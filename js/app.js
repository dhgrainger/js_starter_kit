// alert('Hey find me to know where to put the javascript');


var random = Math.floor(Math.random()*100)
console.log(random)

var yourName = " "
var yourNumber = 0
var chances = 10

function name () {

yourName = prompt("Please enter your name")

}


function number () {

yourNumber = prompt("Enter your number")

output()

}



function output () {
	if (chances > 1){

		if (yourNumber == random) {
			alert("You win " + yourName +"!")
		}
		else {
			if (yourNumber < random) {
				
				chances --

				alert("Too low " + yourName + ". Try again. You have " + chances + " Chances!")
				
				number()
			}
			if (yourNumber > random){
				
				chances --

				alert("Too High " + yourName + ". Try again "  + chances + " Chances!")
				
				number()
			}			
		}
	}	
	else {
		alert("Sorry You Lose")
	}
}

name()
number()
