function lookSay(num) {

    // variables needed for function
    var result = '',
        characters = (num + ' ').split(''),
        lastCharacter = characters[0],
        times = 0;

 
    // forEach character check if its equal to the character next to it.
    characters.forEach(function(nextCharacter) {
    
        // if they match add to the "times" variable.
        if (nextCharacter === lastCharacter) {
            times++;
        }
        // if no match then add character to result then update lastCharacter this way it can rerun.
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