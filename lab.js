//  Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

//  let i = 1

//  for (let i = 0; i < 10; i++) {
//     	console.log(i);
//     }
 for( i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("Fizz Buzz.");
        i++;
    }else if (i % 3 == 0){
            console.log("Fizz.");
            i++;

        } else if (i % 5 == 0){
                console.log("Buzz.");
                i++;
            } else {
                console.log(i);
                i++;
            }
        }
    


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
 