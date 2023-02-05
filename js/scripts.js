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
    //Lowercase with _
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
    //Numbers with -
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
    //Numbers with _
    ['1', '.____'],
    ['2', '..___'],
    ['3', '...__'],
    ['4', '...._'],
    ['5', '.....'],
    ['6', '_....'],
    ['7', '__...'],
    ['8', '___..'],
    ['9', '____.'],
    ['0', '_____'],
    //Special characters with -
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
    ['&','.-...']
    //Special characters with _
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
    ['&','._...']
    // Procedural Characters with -
    ['*Start of work*','-.-.-'],
    ['*Invitation to Transit*','-.-'],
    ['*End of message*','.-.-.'],
    ['Error','........'],
    ['*End of work*','...-.-'],
    ['*Invitation for a particular station to transmit*','-.--.'],
    ['*Wait*','.-...'],
    ['*Understood*','...-.']
    // Procedural Characters with _
    ['*Start of work*','_._._'],
    ['*Invitation to Transit*','_._'],
    ['*End of message*','._._.'],
    ['*End of work*','..._._'],
    ['*Invitation for a particular station to transmit*','_.__.'],
    ['*Wait*','._...'],
    ['*Understood*','..._.']
]);
//Causes translation to appear
function encryptWord() {
    document.getElementById("translateWord").value = translateWord(document.getElementById("inputWord").value)

}
//translate a input of English to MorseCode
function translateWord(word) {
    let translatedMorse = ""
    if (document.getElementById("translateWord").value.length==0){
        return "........"
    }
    for (let i = 0; i < word.length - 1; i++) {
        translatedWord += cipher.get(word[i])
        translatedWord += " "
    }
    translatedWord += cipher.get(word[word.length - 1])
    return translatedWord;
}

function translateMorse(word){
    let translatedWord=""
    if (document.getElementById("translateWord").value.length==0){
        return "error"
    }
    

}