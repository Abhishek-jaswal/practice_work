
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
