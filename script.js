
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
// Printing 2 table up to 2 X 10 = 20 with for loop.
// Printing 2 table up to 2 X 10 = 20 with while loop.
