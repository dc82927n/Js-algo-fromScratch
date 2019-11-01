



function reverseWords(word){

/*	let aw = word.split('')*/
	let wordArr = []
	let stringWord = ""

	for (let i = word.length - 1; i >= 0; i--){
			wordArr.push(word[i])
	}

	stringWord =  wordArr.join("")
	console.log(stringWord)


}


reverseWords("hello Bat Man")