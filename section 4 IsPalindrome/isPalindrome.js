




/* objective to check if the word is a palindrome. a palindrome is spelled the same forward as backward 
  
  thoughts: 
  I iterate over the string and have another loop ilerate backwards to check if 
  both character are the same 

  if they are i will print out true otherwise false

*/

/*
function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  
 	console.log(lettersArr.join('') === lettersArr.reverse().join(''));
}
 
*/




function isPalindrome(string) {
	/*let fowardward = string.split("")*/
	let backwards = string.split("")
	let backArr = []
	
/*	for(let i = 0; i < fowardward.length; i++){

		}*/

		for (let j = backwards.length-1; j >= 0; j--){
				 backArr.push(backwards[j])
		}


		if (backArr.join("") === string){
			return true 
		} else {
			return false 
		}
	

}

console.log(isPalindrome("racecar"));





