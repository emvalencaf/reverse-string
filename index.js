// it'll show a reverse string in the log
// vai mostrar uma string reversa no log
const showReverseString = (str) => {
    console.log(getReverseString(str));
}
// will return a new str that will be the reverse of the passed str
// vai retornar uma string que será o inverso da passada.
const getReverseString = (str) => {
    // creates a new string
    // cria uma nova string
    let newStr = "";

    // Loops through the str from the last position to the first 
    // percorre da última posição a primeira
    for (let i = str.length - 1; i >= 0; i--) {
        // adds a character of str in newStr
        // adiciona um caractere dee str na newStr
        newStr += str[i];
    }
    
    // returns the newStr
    // retorna a newStr
    return newStr;
};