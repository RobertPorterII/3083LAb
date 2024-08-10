//   PROBLEM 1 Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

//  let i = 1

//  for (let i = 0; i < 10; i++) {
//     	console.log(i);
//     }
 // FIZZ BUZZ
// I started doing the problem with 3 and then the 5 division but the fizzbuss would not print , once i made divsible by 3 and 5 the first statement then using else if for 3 and 5 the code fully worked//

// The class note the Most specific cases come first and the i++ on the other lines was causing number skips
 for( i = 1; i <= 100; i++){
    //divisible by both 3 and 5, log “Fizz Buzz
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i+"Fizz Buzz.");
        // i++;
        // ivisible by 3, log “Fizz

    }else if (i % 3 == 0){
            console.log(i+"Fizz.");
            // i++;
//divisible by 5, log “Buzz

        } else if (i % 5 == 0){
                console.log(i+"Buzz.");
                // i++;

                // not divisible by either 3 or 5, log the number
            } else {
                console.log(i);
                // i++;
            }
        }
    

// Below is my sad first attempt at problem 1
//  while (i < 100){
//     if (i % 3 ==0){
//         console.log("Fizz");
//         i++;
//     }
// }

//     if (i % 3 ==0) {
//         console.log(" Fizz.");
//         i++;
//     }
// }
//         if (i % 5 ==0) {
//             console.log(" Buzz.");
//             i++;
            
//     } else if(i%5==0 && i%3==0){
//         console.log(" Fizz Buzz.")
//         i++;

//     } else {
//         console.log(i);
//         i++;
//     }


//     }
//  }
 
 // Part 2 : Prime Time Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.


const num = 17  // are starting base prime number
const isPrime = n =>{ // setting up n variable to solve prime
    
    // all prime numbers are divisible  by 1 but we looking for the next nearest prime not a list all of them

    if (n === 1){ 
        return false; // skipping 1 for the purpose of the lab

    }else if( n === 2){
        return true; 
        
        // setting true condition for n that will help to later resolve the prime loop
    }else{
        for (let x = 2; x < n; x++){
            if(n % x === 0){ // prime numbers can only be divisible by 1 and itself using modulus itself condition
                return false;
            }
        }
    
    return true;
};


    };
    // now setting a constant for nearest Prime number above 17 our starting point of the loop
    const nearestPrime = num =>{
        while (!isPrime(++num)){}; // as long the number is not prime (! not operator does this in the while condition) number will increment up until it reachs next prime
        return num;
    };
    console.log(nearestPrime(17)); // start at 17 console will output 19

