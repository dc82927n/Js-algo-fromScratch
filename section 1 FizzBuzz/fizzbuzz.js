/*
objective is print out number 1 - 20 
then for every number divisible by 3 print fizz
divisible 5 = buzz
divisible 15 fizzbuzz

we will be taking in a number 

*/


/*
we need a loop to print out the number

*/

function fizzBuzz(num){
	for(let i = 1; i <= num; i++){
		if(i % 15 === 0 ){
			console.log("fizzBuzz")
		} else if (i % 5 === 0 ){
			console.log("buzz")
		} else if(i % 3 === 0 ){
			console.log("fizz")
		}else{
			console.log(i)
		} 

	}

}


fizzBuzz(20)

