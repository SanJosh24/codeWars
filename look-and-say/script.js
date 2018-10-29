function lookSay(num) {
    var result = '',
        characters = (num + ' ').split(''),
        lastCharacter = characters[0],
        times = 0;
 
    characters.forEach(function(nextCharacter) {
        if (nextCharacter === lastCharacter) {
            times++;
        }
        else {
            result += (times + '') + lastCharacter;
            lastCharacter = nextCharacter;
            times = 1;
        }
    });
 
    return result;
}
 
(function output(seed, iterations) {
    for (var i = 0; i < iterations; i++) {
        console.log(seed);
        seed = lookSay(seed);
    }
})("1", 10);