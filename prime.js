// codechallenge 3
//prompt
const prompt = require("prompt-sync")({ sigint: true });
// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to filter prime numbers from an array of numbers
function filterPrimes() {
  // Prompt the user to enter a list of numbers
  const input = prompt('Enter a list of numbers: ');
  
  // Split the input string into an array of strings, then convert each string to a number
  const numbers = input.split(',').map(num => parseInt(num.trim()));

  // Use the isPrime function to filter out prime numbers from the array
  const primeNumbers = numbers.filter(num => isPrime(num));
  
  // Return an array containing only the prime numbers
  return primeNumbers;
}

// Example usage
const primeNumbers = filterPrimes();
console.log(primeNumbers);
