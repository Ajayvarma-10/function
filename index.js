// Printing numbers from 1 to 10
console.log("1 to 10:");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Printing numbers from 10 to 1
console.log("10 to 1:");
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Printing numbers from -1 to -10
console.log("-1 to -10:");
i = -1;
while (i >= -10) {
    console.log(i);
    i--;
}

// Printing numbers from -10 to -1
console.log("-10 to -1:");
i = -10;
while (i <= -1) {
    console.log(i);
    i++;
}

// Function to print even and odd numbers, and calculate their sum
function printEvenOddAndSum(userInput) {
    let i = 1; // Start from 1 (or any other starting number)
    let evenSum = 0;
    let oddSum = 0;

    // While loop to print and sum even and odd numbers
    console.log("Even numbers:");
    while (i <= userInput) {
        if (i % 2 === 0) {
            console.log(i); // Print even number
            evenSum += i; // Add to sum of even numbers
        }
        i++;
    }

    i = 1; // Reset i to start from 1 again for odd numbers
    console.log("\nOdd numbers:");
    while (i <= userInput) {
        if (i % 2 !== 0) {
            console.log(i); // Print odd number
            oddSum += i; // Add to sum of odd numbers
        }
        i++;
    }

    // Displaying the sum of even and odd numbers
    console.log("\nSum of even numbers: " + evenSum);
    console.log("Sum of odd numbers: " + oddSum);
}

// Taking user input (assuming this runs in a browser or environment that supports prompt)
let userInput = parseInt(prompt("Enter a number: "), 10);

// Calling the function with the user input
printEvenOddAndSum(userInput);


// output:>>  
// Sum of even numbers: 506

// Sum of odd numbers: 529
