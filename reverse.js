//Write a program that will take a hardcoded string, and console log the reverse it. Use a for loop

var inputString = "building"

//Split the inputString into an array.  Note that separator is an empty string.
var arrayIS = inputString.split("")

//Create an empty array and assign to variable arrayOS (for array outputString).
var arrayOS = []

//Loop over each element in the array.
for (var i = 0; i < arrayIS.length; i++) {
	//We're taking the length of the array inputString and subtracting it by one to account for 0-based indexing.
	//We're also subtracting it by the loop (index) variable.
	//This results in an index variable j that grabs array elements in backwards order.
	var j = arrayIS.length - 1 - i;
	//We're grabbing the "j" element and assigning it to "k" in backwards order.
	var k = arrayIS[j];
	//We're pushing the "j" element (which is the value stored in "k") into the output array.
	arrayOS.push(k)
};

//We're joining the individual values stored in the arrayOS and assigning them to the outputString variable.
var outputString = arrayOS.join("");

console.log(outputString);
