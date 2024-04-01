//code challenge 2
// prompt the user to enter start and end no
const prompt = require("prompt-sync")({ sigint: true });
function generateArray() {
    //enter the start and end number
    const start = parseInt(prompt('Enter the start number:'));
    const end = parseInt(prompt('Enter the end number:'));
    //empty array to store the generated numbers
    let array = [];
    //start number to the end number
    for (let i = start; i <= end; i++) {
      //adds each number to the array  
      array.push(i);
    }
    //returns all the numbers btn start and end
    return array;
  }
  
  // Example usage
  console.log(generateArray());