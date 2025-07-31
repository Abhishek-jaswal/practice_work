
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


// Find the sum of the first N even numbers.
// Find the sum of squares of first N natural numbers.
// Check if a number is a power of 2.
// Write a calculator app that does operations (+, -, ×, /, %).
// Find the sum of n natural numbers using formulae.
// Find the sum of n natural numbers without formulae.
// Find out whether a number is prime or not.
// Find the factorial of a given number.
// Find the sum of digits of a number.
// Check if a number is a perfect number.
// Check if a number is an Armstrong number.
