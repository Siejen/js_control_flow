// ##filterLongWords.js
// Hardcode an array of words. Have a variable maxLength, and push those words to only to an array filter long words

var petNames = ['milo', 'nano', 'bubbles', 'maggie', 'clementine', 'gigi', 'isabelle'];

var maxLength = 4

var petNamesQualified = []

for (var i = 0; i < petNames.length; i++) {
		var petNameLength = petNames[i].length;
		if (petNameLength <= maxLength) {
			//print the i-th petName.
			//*console.log(petNames[i]);
			//print the corresponding petNameLength.
			//*console.log(petNameLength);
			petNamesQualified.push(petNames[i]);			
		}
		else {
		}		
};
console.log(petNamesQualified);