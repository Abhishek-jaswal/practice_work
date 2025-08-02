
//  Find the largest of three numbers (a, b, c).
function largest_number(a,b,c){
    if (a>=b && a>=c){
        return a
    }
    else if (b>=c && b>=a){
        return b
    }
    else {
        return c
    }
}
console.log(largest_number(10,11,12))



// Find out whether a number is even or odd.
function even_or_odd(a){
    if(a % 2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
console.log(even_or_odd(4))
       

// Printing 1 to 10 numbers using for loop.
for(i = 0 ; i<=10 ; i++){
    console.log(i)
}

// Printing 1 to 10 numbers using while loop.
i=1;
while(i<=10){
    console.log(i);
    i++;
}
       
// # Printing 10 to 1 numbers using for loop.
for(i = 10 ; i>=1 ; i--){
    console.log(i);
}

// Printing 10 to 1 numbers using while loop.
i=10;
while(i>=1){
    console.log(i);
    i--;
}

// Print 1 to 10, using for loop but if your number is 5, stop the loop and print "TICKETS ARE OVER".
for(i=1; i<=10 ;i++){
    if(i==5){
        console.log("TICKETS ARE OVER");
    }
}

// Print 1 to 10 numbers using for loop but if number is 5 print "SKIPPING NUMBER 5".
for( i=1 ; i<=10; i++){
    if (i == 5){
        console.log("SKIPPING NUMBER 5");
    }
    else{
        console.log(i)
    }
}

// Printing 2 table up to 2 X 10 = 20 with for loop.
for(i=1; i<=10; i++){
    console.log("2 X " + i + " = " + (2 * i));

}

// Printing 2 table up to 2 X 10 = 20 with while loop.
i=1;
while(i<=10){
    console.log("2 X " + i + " = " + (2 * i));
    i++;
}
// Find the smallest of three numbers (a, b, c).
function samallest_number(a,b,c){
    if (a<=b && a<=c){
        return a
    }
    else if (b<=c && b<=a){
        return b
    }
    else {
        return c
    }
}
console.log(samallest_number(10,1,12))

// Check if a number is divisible by 2.
function divisible(a){
   if (a % 2 == 0){
   console.log("The number is divisible by 2",true)
   }
   else{
    console.log("The number is not divisible by 2",false)
   }
}
divisible(25);

// Check if a number is divisible by 3.
function divisible_by_three(a){
   if (a % 3 == 0){
   console.log("The number is divisible by 2" ,true)
   }
   else{
    console.log("The number is not divisible by 2", false)
   }
}
divisible_by_three(21);

// Check if a number is divisible by 5.
function divisible_by_five(a){
   if (a % 5 == 0){
   console.log("The number is divisible by 5" ,true)
   }
   else{
    console.log("The number is not divisible by 5", false)
   }
}
divisible_by_five(25);

// Printing n table with for loop.
function print_table(n){
    for(i=1; i<=10; i++){
    console.log(n +" X " + i + " = " + (n * i));

}
}
print_table(5);

// Find the sum of the first N - 5 odd numbers.
function sum_of_odd_numbers(n){
    let sum = 0;
    for(let i = 1; i <= n; i += 2){
        sum += i;
    }
    return sum;
}
console.log(sum_of_odd_numbers(10));


function sum_of_odd(n){
    const sum = n - 5;
    if (sum <= 0) {
        return 0; 
    }
    console.log(sum*sum);
}
sum_of_odd(10);

// Find the sum of the first N even numbers.

function sum_of_even(n){
    return (n* (n+1));
}
console.log(sum_of_even(8));

// Find the sum of squares of first N natural numbers.
function sum_of_squares(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i * i;
    }
    return sum;
}
console.log(sum_of_squares(5));


function sumOfSquares(N) {
  return (N * (N + 1) * (2 * N + 1)) / 6;
}

console.log("Sum of squares:", sumOfSquares(5)); 


// Check if a number is a power of 2.
function isPowerOfTwo(n) {
    while (n > 1) {
        if (n % 2 !== 0) return false;
        n /= 2;
    }
    return true;
}
console.log(isPowerOfTwo(4)); // true

// Write a calculator app that does operations (+, -, ×, /, %).
function calculator(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        default:
            return 'Invalid operation';
    }
}
console.log(calculator(10, 5, '+')); 

// Find the sum of n natural numbers using formulae.
function sumOfNaturalNumbers(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumOfNaturalNumbers(10)); 

// Find the sum of n natural numbers without formulae.
function sumOfNaturalNumbersWithoutFormula(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNaturalNumbersWithoutFormula(10));

// Find out whether a number is prime or not.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); 

// Find the factorial of a given number.
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); 

// Find the sum of digits of a number.
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(sumOfDigits(123));

// Check if a number is a perfect number.
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}
console.log(isPerfectNumber(6)); 

// Check if a number is an Armstrong number.
function isArmstrongNumber(num) {
    const digits = String(num).split("");
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), digits.length), 0);
    return sum === num;
}
console.log(isArmstrongNumber(153)); 

// Find the GCD (Greatest Common Divisor) of two numbers using Euclid’s algorithm.
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcd(48, 18)); 

// Find if a number is a palindrome.
function isPalindrome(num) {
    const str = String(num);
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome(121));

// Find the reverse of a number.
function reverseNumber(num) {
    return Number(String(num).split("").reverse().join(""));
}
console.log(reverseNumber(12345));

// Check if a number is a prime number.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));

// Find all prime numbers up to N.
function findPrimes(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
console.log(findPrimes(30));

// Find the Fibonacci series up to N numbers.
function fibonacciSeries(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}
console.log(fibonacciSeries(10));

// Check if a number is a perfect square.
function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    return sqrt * sqrt === num;
}
console.log(isPerfectSquare(16));

// Find the sum of cubes of first N natural numbers.
function sumOfCubes(n) {
    return Math.pow((n * (n + 1)) / 2, 2);
}
console.log(sumOfCubes(3));

// Find the N-th Fibonacci number using dynamic programming.
function fibonacci(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log(fibonacci(10));

// Find the prime factorization of a number.
function primeFactorization(n) {
    const factors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 1) factors.push(n);
    return factors;
}
console.log(primeFactorization(28));

// Find the product of digits of a number.
function productOfDigits(num) {
    let product = 1;
    while (num > 0) {
        product *= num % 10;
        num = Math.floor(num / 10);
    }
    return product;
}
console.log(productOfDigits(123));

// Calculate the nth triangular number.
function triangularNumber(n) {
    return (n * (n + 1)) / 2;
}
console.log(triangularNumber(5));

// Find the number of digits in a number.
function countDigits(num) {
    return String(num).length;
}
console.log(countDigits(12345));

// Find the greatest of four numbers.
function findGreatestOfFour(a, b, c, d) {
    return Math.max(a, b, c, d);
}
console.log(findGreatestOfFour(1, 2, 3, 4));




// Print 1 to 10, using for loop but if your number is 5, stop the loop and print "TICKETS ARE OVER"
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("TICKETS ARE OVER");
        break;
    }
    console.log(i);
}
// Print 1 to 10 numbers using for loop but if number is 5 print "SKIPPING NUMBER 5"
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("SKIPPING NUMBER 5");
        continue;
    }
    console.log(i);
}

// Print all numbers from 1 to 20, but skip multiples of 3
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// Print all numbers from 1 to 20, but stop when you reach 15
for (let i = 1; i <= 20; i++) {
    if (i === 15) {
        break;
    }
    console.log(i);
}

// Print all even numbers from 1 to 20, but skip 10
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0 && i !== 10) {
        console.log(i);
    }
}

// Print all numbers from 1 to 10, but return early if you find 7
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        return;
    }
    console.log(i);
}
// Print all numbers from 1 to 15, but break when you find a number divisible by 7
for (let i = 1; i <= 15; i++) {
    if (i % 7 === 0) {
        break;
    }
    console.log(i);
}

// Print all numbers from 1 to 20, but continue if the number is odd
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// Print all numbers from 1 to 25, but break if you find a perfect square
for (let i = 1; i <= 25; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
        break;
    }
    console.log(i);
}

// Print all numbers from 1 to 30, but skip numbers that are multiples of both 3 and 5
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        continue;
    }
    console.log(i);
}



// Print an array element by element
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Find the size of the array elements
let arr = [1, 2, 3, 4, 5];
console.log("Size of array:", arr.length);

// Remove duplicates from a list of numbers
let arr = [1, 2, 3, 4, 5];
let uniqueArr = [...new Set(arr)];
console.log("Array after removing duplicates:", uniqueArr);

// Find the second largest number in an array
function findSecondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return second;
}
console.log("Second largest number:", findSecondLargest([1, 2, 3, 4, 5]));

// Find the Maximum Number in an Array
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Maximum number in array:", findMax([1, 2, 3, 4, 5]));
// Find All Even Numbers in an Array
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers in array:", findEvenNumbers([1, 2, 3, 4, 5]));
// Find Common Elements in Two Arrays
function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}
console.log("Common elements:", findCommonElements([1, 2, 3], [2, 3, 4]));
// Calculate the Sum of an Array
function calculateSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of array:", calculateSum([1, 2, 3, 4, 5]));
// Filter Out Odd Numbers
function filterOutOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Array after filtering out odd numbers:", filterOutOddNumbers([1, 2, 3, 4, 5]));
// Find Squares of All Elements in an Array
function findSquares(arr) {
    return arr.map(num => num * num);
}
console.log("Squares of array elements:", findSquares([1, 2, 3, 4, 5]));
// Convert Array of Strings to Uppercase
function convertToUppercase(arr) {
    return arr.map(str => str.toUpperCase());
}
console.log("Uppercase strings:", convertToUppercase(["hello", "world"]));
// Flatten a Nested Array
function flattenArray(arr) {
    return arr.flat();
}
console.log("Flattened array:", flattenArray([1, [2, 3], [4, 5]]));

// Remove Duplicate Elements from an Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Array after removing duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));




// Find the square root of a number using Math.sqrt()

function squareRoot(num) {
    return Math.sqrt(num);
}
console.log("Square root of 16:", squareRoot(16));

// Find the absolute value of a number using Math.abs()

function absoluteValue(num) {
    return Math.abs(num);
}
console.log("Absolute value of -5:", absoluteValue(-5));

// Round a number to the nearest integer using Math.round()

function roundNumber(num) {
    return Math.round(num);
}
console.log("Rounded value of 4.7:", roundNumber(4.7));

// Find the ceiling of a number using Math.ceil()

function ceilingValue(num) {
    return Math.ceil(num);
}
console.log("Ceiling value of 4.1:", ceilingValue(4.1));

// Find the floor of a number using Math.floor()

function floorValue(num) {
    return Math.floor(num);
}
console.log("Floor value of 4.9:", floorValue(4.9));

// Generate a random number between 1 and 10 using Math.random()
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random number between 1 and 10:", randomNumber(1, 10));

// Find the maximum of two numbers using Math.max()

function maxOfTwo(a, b) {
    return Math.max(a, b);
}
console.log("Maximum of 5 and 10:", maxOfTwo(5, 10));

// Find the minimum of two numbers using Math.min()

function minOfTwo(a, b) {
    return Math.min(a, b);
}
console.log("Minimum of 5 and 10:", minOfTwo(5, 10));

// Calculate the power of a number using Math.pow()

function power(base, exponent) {
    return Math.pow(base, exponent);
}
console.log("2 raised to the power of 3:", power(2, 3));

// Find the natural logarithm of a number using Math.log()

function naturalLog(num) {
    return Math.log(num);
}
console.log("Natural logarithm of 10:", naturalLog(10));

// Calculate the sine of an angle using Math.sin()
function sine(angle) {
    return Math.sin(angle);
}
console.log("Sine of 30 degrees:", sine(30 * Math.PI / 180)); 

// Calculate the cosine of an angle using Math.cos()

function cosine(angle) {
    return Math.cos(angle);
}
console.log("Cosine of 30 degrees:", cosine(30 * Math.PI / 180));

// Calculate the tangent of an angle using Math.tan()

function tangent(angle) {
    return Math.tan(angle);
}
console.log("Tangent of 30 degrees:", tangent(30 * Math.PI / 180));

// Convert degrees to radians using Math.PI

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}   
console.log("45 degrees in radians:", degreesToRadians(45));

// Generate a random integer between two given numbers

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random integer between 1 and 100:", randomInteger(1, 100));