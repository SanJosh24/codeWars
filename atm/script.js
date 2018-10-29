function withdraw(n) {
    var hundred = Math.floor(n / 100) 
  n %= 100
  var fifty = Math.floor(n / 50) 
  n %= 50
  var twenty = Math.floor(n / 20) 
  n %= 20
  if (n) {
    if (fifty) {
      fifty -= 1
      n += 50
      twenty += n / 20
    } else {
      hundred -= 1
      fifty += 1
      twenty += 3
    }
  }
  return [hundred, fifty, twenty]
}