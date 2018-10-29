var splitInteger = function(num, parts) {
  let splitArray = [];

  const length = parts;

  for (var i = 0; i < length; i++) {
    splitArray.push(1);
  }
  let index = 0;
  while (sumOfParts(splitArray) < num) {
    splitArray[index] += 1;
    if (index < length - 1) {
      index++;
    } else {
      index = 0;
    }
  }
  
  return splitArray;
}

function sumOfParts(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}