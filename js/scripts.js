const cipher = new Map([
    //Uppercase with -
    ['A', '.-'],
    ['B', '-...'],
    ['C', '-.-.'],
    ['D', '-..'],
    ['E', '.'],
    ['F', '..-.'],
    ['G', '--.'],
    ['H', '....'],
    ['I', '..'],
    ['J', '.---'],
    ['K', '-.-'],
    ['L', '.-..'],
    ['M', '--'],
    ['N', '-.'],
    ['O', '---'],
    ['P', '.--.'],
    ['Q', '--.-'],
    ['R', '.-.'],
    ['S', '...'],
    ['T', '-'],
    ['U', '..-'],
    ['V', '...-'],
    ['W', '.--'],
    ['X', '-..-'],
    ['Y', '-.--'],
    ['Z', '--..'],
    //Uppercase with _
    ['A', '._'],
    ['B', '_...'],
    ['C', '_._.'],
    ['D', '_..'],
    ['F', '.._.'],
    ['G', '__.'],
    ['H', '....'],
    ['J', '.___'],
    ['K', '_._'],
    ['L', '._..'],
    ['M', '__'],
    ['N', '_.'],
    ['O', '___'],
    ['P', '.__.'],
    ['Q', '__._'],
    ['R', '._.'],
    ['S', '...'],
    ['T', '_'],
    ['U', '.._'],
    ['V', '..._'],
    ['W', '.__'],
    ['X', '_.._'],
    ['Y', '_.__'],
    ['Z', '__..'],
    //Lowercase with -
    ['a', '.-'],
    ['b', '-...'],
    ['c', '-.-.'],
    ['d', '-..'],
    ['e', '.'],
    ['f', '..-.'],
    ['g', '--.'],
    ['h', '....'],
    ['i', '..'],
    ['j', '.---'],
    ['k', '-.-'],
    ['l', '.-..'],
    ['m', '--'],
    ['n', '-.'],
    ['o', '---'],
    ['p', '.--.'],
    ['q', '--.-'],
    ['r', '.-.'],
    ['s', '...'],
    ['t', '-'],
    ['u', '..-'],
    ['v', '...-'],
    ['w', '.--'],
    ['x', '-..-'],
    ['y', '-.--'],
    ['z', '--..'],
    // //Lowercase with _
    ['a', '._'],
    ['b', '_...'],
    ['c', '_._.'],
    ['d', '_..'],
    ['e', '.'],
    ['f', '.._.'],
    ['g', '__.'],
    ['h', '....'],
    ['i', '..'],
    ['j', '.___'],
    ['k', '_._'],
    ['l', '._..'],
    ['m', '__'],
    ['n', '_.'],
    ['o', '___'],
    ['p', '.__.'],
    ['q', '__._'],
    ['r', '._.'],
    ['s', '...'],
    ['t', '_'],
    ['u', '.._'],
    ['v', '..._'],
    ['w', '.__'],
    ['x', '_.._'],
    ['y', '_.__'],
    ['z', '__..'],
    // //Numbers with -
    ['1', '.----'],
    ['2', '..---'],
    ['3', '...--'],
    ['4', '....-'],
    ['5', '.....'],
    ['6', '-....'],
    ['7', '--...'],
    ['8', '---..'],
    ['9', '----.'],
    ['0', '-----'],
    // //Numbers with _
    ['1', '.____'],
    ['2', '..___'],
    ['3', '...__'],
    ['4', '...._'],
    ['6', '_....'],
    ['7', '__...'],
    ['8', '___..'],
    ['9', '____.'],
    ['0', '_____'],
    // //Special characters with -
    [' ', '/'],
    ['!', '-.-.--'],
    ['?', '..--..'],
    [',', '--..--'],
    ['.', '.-.-.-'],
    [':', '---...'],
    [';', '-.-.-.'],
    ['=', '-...-'],
    ['+', '.-.-.'],
    ['-', '-....-'],
    ['$', '...-..'],
    ['@', '...-..-'],
    ['&', '.-...'],
    // //Special characters with _
    [' ', '/'],
    ['!', '_._.__'],
    ['?', '..__..'],
    [',', '__..__'],
    ['.', '._._._'],
    [':', '___...'],
    [';', '_._._.'],
    ['=', '_..._'],
    ['+', '._._.'],
    ['_', '_...._'],
    ['$', '..._..'],
    ['@', '..._.._'],
    ['&', '._...'],
    // // Procedural Characters with -
    ['*Start of work*', '-.-.-'],
    ['*Invitation to Transit*', '-.-'],
    ['*End of message*', '.-.-.'],
    ['Error', '........'],
    ['*End of work*', '...-.-'],
    ['*Invitation for a particular station to transmit*', '-.--.'],
    ['*Wait*', '.-...'],
    ['*Understood*', '...-.'],
    // // Procedural Characters with _
    ['*Start of work*', '_._._'],
    ['*Invitation to Transit*', '_._'],
    ['*End of message*', '._._.'],
    ['*End of work*', '..._._'],
    ['*Invitation for a particular station to transmit*', '_.__.'],
    ['*Wait*', '._...'],
    ['*Understood*', '..._.']
]);

const reversedMap = new Map([['._', 'a'],
['_...', 'b'],
['_._.', 'c'],
['_..', 'd'],
['.', 'e'],
['.._.', 'f'],
['__.', 'g'],
['....', 'h'],
['..', 'i'],
['.___', 'j'],
['_._', 'k'],
['._..', 'l'],
['__', 'm'],
['_.', 'n'],
['___', 'o'],
['.__.', 'p'],
['__._', 'q'],
['._.', 'r'],
['...', 's'],
['_', 't'],
['.._', 'u'],
['..._', 'v'],
['.__', 'w'],
['_.._', 'x'],
['_.__', 'y'],
['__..', 'z'],
['.-', 'a'],
['-...', 'b'],
['-.-.', 'c'],
['-..', 'd'],
['..-.', 'f'],
['--.', 'g'],
['.---', 'j'],
['-.-', 'k'],
['.-..', 'l'],
['--', 'm'],
['-.', 'n'],
['---', 'o'],
['.--.', 'p'],
['--.-', 'q'],
['.-.', 'r'],
['-', 't'],
['..-', 'u'],
['...-', 'v'],
['.--', 'w'],
['-..-', 'x'],
['-.--', 'y'],
['--..', 'z'],
['/',' ']]);
//Causes translation of Morse to appear
function showMorse() {
    let inputEnglish = document.getElementById("inputEnglish").value
    document.getElementById("translatedMorse").value = translateEnglish(inputEnglish)

}
//translates an input of English to MorseCode
function translateEnglish(word) {
    let translatedEnglish = ""
    if (word.length == 0) {
        return "........"
    }
    for (let i = 0; i < word.length - 1; i++) {
        translatedEnglish += cipher.get(word[i])
        translatedEnglish += " "
    }
    translatedEnglish += cipher.get(word[word.length - 1])
    return translatedEnglish
}


//Causes translation of Morse to appear
function showEnglish() {
    let inputMorse = (document.getElementById("inputMorse").value)
    document.getElementById("translatedEnglish").value = translateMorse(inputMorse)

}
// //translates an input of MorseCode to English
function translateMorse(code) {
    translatedMorse = ""
    splitCode = code.split(" ")
    for (let i = 0; i < splitCode.length; i++) {
        translatedMorse += reversedMap.get(splitCode[i])
    }
    return translatedMorse
}

