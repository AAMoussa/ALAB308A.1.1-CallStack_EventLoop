// Part 3: Deferred Execution

// Cache HTML element for displaying prime numbers
const resultElement = document.getElementById('result');

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Function to find all prime numbers up to a given number n
function findPrimesUpTo(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Function to display primes gradually using setTimeout
function displayPrimesGradually(n) {
    const primes = findPrimesUpTo(n);
    let index = 0;

    function displayNextPrime() {
        if (index < primes.length) {
            resultElement.textContent += primes[index] + ', ';
            index++;
            setTimeout(displayNextPrime, 0); // Schedule the next prime to be displayed
        } else {
            resultElement.textContent += ' Calculation finished.';
            alert('Calculation is finished.'); // Alert when all primes are displayed
        }
    }

    displayNextPrime(); // Start displaying primes
}

// Example usage: display prime numbers up to 10,000
displayPrimesGradually(10000);

// div in the body of the primes.html document is an HTML element
// with id="result" where the prime numbers will be displayed within
// a newly created p element.
resultElement.appendChild(document.createElement("p")).textContent = displayPrimesGradually(10000);



// Explanation:
// Cache HTML Element: The resultElement variable caches an HTML element where the prime numbers will be displayed.

// isPrime Function: Checks if a given number is prime.

// findPrimesUpTo Function: Generates an array of all prime numbers up to a given number n.

// displayPrimesGradually Function: Displays prime numbers gradually using setTimeout to allow the browser to render between each number.

// It calculates all prime numbers up to n using findPrimesUpTo.
// It defines displayNextPrime, a recursive function that uses setTimeout to schedule the display of each prime number.
// After all primes are displayed, it updates the resultElement and alerts the user that the calculation is finished.
// Example Usage: Calls displayPrimesGradually with 10000 as an argument to demonstrate the functionality. Prime numbers up to 10,000 will be displayed gradually, allowing the browser to update the display after each number.

// Note:
// Ensure you have an HTML element with id="result" where the prime numbers will be displayed.
// This approach of using setTimeout with a minimal delay (0 milliseconds) allows the browser to handle rendering tasks between displaying each prime number, enhancing user experience by preventing UI blocking during intensive computations.