// ##grade.js
// Output the following code from a variable with a code 
// returns a grade for the score, either "A", "B", "C", "D", or "F".

var assignGrade = function(score) {
	if (score > 89) {
		return score + " is a grade of A.";	
	}
	else if (90 > score && score > 79) {
		return score + " is a grade of B.";	
	}
	else if (80 > score && score > 69) {
		return score + " is a grade of C.";	
	}
	else if (70 > score && score > 59) {
		return score + " is a grade of D.";
	}
	else {
		return score + " is a grade of F.";
	}	
}

var result = assignGrade(55);

console.log(result)
