// For Loop  (used when we know the number of iteration to perform)
// console.log("aditya");
// console.log("aditya");
// console.log("aditya");
// console.log("aditya");    

// for(let i=0;i<10;i++){           //for(initialisation:condition:iteration/steps){things to run}
//     console.log("aditya");   //rather than writing same thing/line multiple time we use loops
// }


//while and do-while used when we dont know about the number of iteration
//While Loop (no task perform if condition fails)
// let count=0;                       //initialisation
// while(count<5){                    //while(condition){task}
//     console.log("aditya");
//     count++;                      //increment
// }

// //Do-While loops (always perform task once regardless of condition is true or not)
// let count=0;                          //initialisation
// do{                                   //do{task}while{condition}
//     console.log(count)                //task to do 
//     count ++;                         //increment
// }while(count<5);                      //condition

//Continue & Break
// let count = 0;
// while(count<5){
//     count++;
//     if(count==2){
//         continue         //skip iteration 
//     }
//     console.log("aditya",count);
    
// }

let count = 0;
while(count<5){
    count++;
    if(count==2){
        break       //break iteration 
    }
    console.log("aditya",count);
    
}