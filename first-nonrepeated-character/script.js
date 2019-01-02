function firstNonRepeatingLetter(str) {
	// declare variable to empty hash
	let obj = {};

	// for loop to iterate through the input string
	for(let i = 0; i < str.length; i++){
	// converting every character into a lowercase 
		obj[str[i].toLowerCase()] = obj[str[i].toLowerCase()] +1 || 1
	}
	
	// iterates over the object keys
	for(let i in obj){
		// if the key is equal to 1
		if(obj[i] === 1){
			// 
			return str[str.toLowerCase().indexOf(i)]
		}
	}
	return "";
	
}
firstNonRepeatingLetter('MoOnmEn')