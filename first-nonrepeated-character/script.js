function firstNonRepeatingLetter(str) {
	
	let obj = {};
	for(let i = 0; i < str.length; i++){
		obj[str[i].toLowerCase()]= obj[str[i].toLowerCase()] +1 || 1
	}
	
	for(let i in obj){
		if(obj[i] === 1){
			return str[str.toLowerCase().indexOf(i)]
		}
	}
	return "";
	
}
firstNonRepeatingLetter('MoOnmEn')