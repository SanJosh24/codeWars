var palindromeChainLength = function(n) {

  // created 3 variables for the function
 let notPalindrome = true, counter = 0, value=n;

  // while notPalindrome is "true" execute.
 while(notPalindrome){

  // reverse the value of the input that was entered
   let reversed = Number.parseInt(value.toString().split('').reverse().join(''));

  // change the variable to false if the input is the same as its palindrome
   if(value == reversed){

     notPalindrome = false;

  // if it doesnt match add 1 to the counter and add the value with its reversed.
   } else {

     counter++;
     value += reversed;

   }

 }

 return index;

}

console.log(palindromeChainLength(87))