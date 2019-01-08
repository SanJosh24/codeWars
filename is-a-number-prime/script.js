const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
    if (num <= 1) return false;
  return num !== 1 && num !== 0;
}


// Best Practice

// function isPrime(num) {
//   for (var i = 2; i < num; i++) if (num % i == 0) return false;
//   return num >= 2; 
// }