function findNb(m) {
  var sum = 0;
  for (n = 0; sum < m; n++) {
    sum = Math.pow(n*(n+1), 2) / 4;
  } if (sum === m) return n-1;
  else return (-1);
}

findNb(24723578342962);
findNb(1071225);
findNb(40539911473216);
findNb(4183059834009);
findNb(135440716410000);

// Other Solutions:
 
function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}

function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}