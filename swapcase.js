//code challenge 1
//prompts the user to enter a string
const prompt = require("prompt-sync")({ sigint: true });
// function to swap the case of each character in a string
function swapCase (){
// prompts the user to enter a string    
const input = prompt ('Enter a string:');
//splits the input into an array of characters
return input 
.split('')
.map(char => {
    //swaps the cases 
    if (char === char.toUpperCase()) {
        return char.toLowerCase();
    } else if (char === char.toLowerCase()) {
        return char.toUpperCase();
    }
    return char;
})
// joins the characters back to a string
.join('');
}
// example
console.log(swapCase());