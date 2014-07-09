// ##tempConvert.js
// Out a temperature conversion.
// Convert it to fahrenheit and output "NN°C is NN°F".



// var celsius = prompt("How many degrees is it in celsius?")

//Method#1
var celsius = 10.0

var fahrenheit = (celsius * 9) / 5 + 32;

console.log(celsius + "°C" + " is " + fahrenheit + "°F");


//Method#2
var tempConvert = function(celsius) {
	var fahrenheit = (celsius * 9) / 5 + 32;	
	return celsius + "°C" + " is " + fahrenheit + "°F";
}

var inputTempC = 10
var result = tempConvert(inputTempC);

console.log(result);
