
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




// Printing 1 to 10 numbers using for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Printing 1 to 10 numbers using while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// Printing 10 to 1 numbers using for loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// Printing 10 to 1 numbers using while loop
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}
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
// Printing 2 table up to 2 X 10 = 20 with for loop
for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}
// Printing 2 table up to 2 X 10 = 20 with while loop
let k = 1;
while (k <= 10) {
    console.log(`2 x ${k} = ${2 * k}`);
    k++;
}
// Printing n table with for loop
for (let i = 1; i <= 10; i++) {
    console.log(`n x ${i} = ${n * i}`);
}
// Print all numbers divisible by 4 between 1 and 100
for (let i = 1; i <= 100; i++) {
    if (i % 4 === 0) {
        console.log(i);
    }
}
// Print all numbers that are multiples of 6 up to N using a loop
function multiplesOfSix(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 6 === 0) {
            console.log(i);
        }
    }
}
multiplesOfSix(60);
// Print up to n prime numbers (Note: 2<=n<=100)
function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
printPrimes(100);

// Print a pattern of stars (e.g., triangle or pyramid pattern)
for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}
// Print a pyramid pattern of numbers (e.g., 1, 1 2, 1 2 3)
for (let i = 1; i <= 5; i++) {
    let numbers = '';
    for (let j = 1; j <= i; j++) {
        numbers += j + ' ';
    }
    console.log(numbers);
}

// Print a reverse pyramid pattern of stars
for (let i = 5; i >= 1; i--) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}

// Write a program to print a right-angled triangle pattern using numbers
for (let i = 1; i <=5; i++){
    let numbers = '';
    for (let j=1; j <= i; j++){
        numbers += j + ' ';
    }
    console.log(numbers);
}
// Print the multiplication table of a given number
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplicationTable(3);
// Printing n table up to m factor
function printTableUpToM(n, m) {
    for (let i = 1; i <= m; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
printTableUpToM(4, 6);

// Printing tables between m and n (e.g., print 2 to 5 tables)
function printTablesBetween(m, n) {
    for (let i = m; i <= n; i++) {
        console.log(`Table of ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log('');
    }
}
printTablesBetween(2, 5);
// Left Increasing star pattern
for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}

// Left decreasing star pattern
for (let i = 5; i >= 1; i--) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}
// Right increasing star pattern
for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 1; j <= 5 - i; j++) {
        stars += ' ';
    }
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}

// Right decreasing star pattern
for (let i = 5; i >= 1; i--) {
    let stars = '';
    for (let j = 1; j <= 5 - i; j++) {
        stars += ' ';
    }
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}

// Print all prime numbers between 1 and N using a for loop
function printPrimesUpToN(n) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
printPrimesUpToN(50);
// Implement a program to print the Fibonacci series using a while loop
function fibonacciWhileLoop(n) {
    let a = 0, b = 1, count = 0;
    while (count < n) {
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
        count++;
    }
}
fibonacciWhileLoop(10);
// Print the sum of all even numbers up to N
function sumEvenNumbers(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    console.log(`Sum of even numbers up to ${n}: ${sum}`);
}
sumEvenNumbers(10);

// Print the sum of all odd numbers up to N
function sumOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    console.log(`Sum of odd numbers up to ${n}: ${sum}`);
}
sumOddNumbers(10);

// Print the factorial of a number using a while loop
function factorialWhileLoop(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    console.log(`Factorial of ${n}: ${result}`);
}
factorialWhileLoop(5);

// Find the largest prime factor of a number using a for loop
function largestPrimeFactor(n) {
    let largest = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            largest = i;
            n /= i;
        }
    }
    if (n > 1) {
        largest = n;
    }
    console.log(`Largest prime factor: ${largest}`);
}
largestPrimeFactor(13195);
// Write a program that prints all divisors of a number using a for loop
function printDivisors(n) {
    console.log(`Divisors of ${n}:`);
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
}
printDivisors(28);
// Calculate the nth Fibonacci number using iteration
function fibonacciIterative(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return n === 0 ? a : b;
}
console.log(`Fibonacci number at position 10: ${fibonacciIterative(10)}`);
// Write a program to reverse a string using a loop
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(`Reversed string: ${reverseString("Hello World")}`);
// Implement a program to count the number of digits in a number using a loop
function countDigitsInNumber(num) {
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}
console.log(`Number of digits: ${countDigitsInNumber(12345)}`);
// Write a program to find the sum of the digits of a number using a while loop
function sumOfDigitsWhileLoop(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(`Sum of digits: ${sumOfDigitsWhileLoop(12345)}`);
// Implement a program to check whether a number is an Armstrong number using a while loop
function isArmstrongNumber(num) {
    let sum = 0;
    const digits = String(num).length;
    let temp = num;
    
    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    
    return sum === num;
}
console.log(`Is Armstrong number: ${isArmstrongNumber(153)}`);
// Implement a program that calculates the sum of first N even numbers using a for loop
function sumOfEvenNumbersForLoop(n) {
    let sum = 0;
    for (let i = 0; i < n; i += 2) {
        sum += i;
    }
    return sum;
}
// Write a program that calculates the sum of the first N odd numbers using a for loop
function sumOfOddNumbersForLoop(n) {
    let sum = 0;
    for (let i = 1; i < n; i += 2) {
        sum += i;
    }
    return sum;
}

// Create a program to generate a number triangle (like Pascal's triangle) using loops
function generateNumberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}

// Implement a program that calculates the sum of cubes of numbers from 1 to N
function sumOfCubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i * i;
    }
    return sum;
}
// Write a program to print a table for factorial calculation
function factorialTable(n) {
    console.log(`Factorial Table up to ${n}:`);
    for (let i = 0; i <= n; i++) {
        console.log(`${i}! = ${factorial(i)}`);
    }
}
// Calculate the nth triangular number using a while loop
function triangularNumberWhileLoop(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}
// Print the Fibonacci series using a for loop
function fibonacciForLoop(n) {
    let a = 0, b = 1;
    console.log(a);
    for (let i = 1; i < n; i++) {
        console.log(b);
        const temp = a;
        a = b;
        b = temp + b;
    }
}
// Implement a program to find whether a number is even or odd using a ternary operator
function isEvenOrOdd(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}
console.log(`Number 5 is: ${isEvenOrOdd(5)}`);

// Write a program that outputs the sum of even and odd numbers separately for the first N numbers
function sumEvenOdd(n) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }
    console.log(`Sum of even numbers: ${evenSum}`);
    console.log(`Sum of odd numbers: ${oddSum}`);
}
// Implement a program to check if a number is a prime using a loop
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}