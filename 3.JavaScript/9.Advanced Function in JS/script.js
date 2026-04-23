//Arrow Function
// let greet = ()=>{                         //no need to wriite function keyword just work with arrow
//     console.log("hey Everyone");
// }

// greet();

// let greet1 = (count)=>{                         //we can also give parameter to arrow function just like other function types
//     console.log("hey Everyone",count);
// }

// greet1(2);

// const square = (num) => num*num                   //for single line task we have no need to add paratheses and return also, we can write like this with arrow function
// console.log(square(2));

//CallBack Function  
//passes function as parameter of another function
// const calculate=(a,b,operation) => {   
//     return operation(a,b);
// }
// console.log(calculate(2,3,function(n1,n2){           //calculate function with function in parameter
//     return n1+n2
// }));
// console.log(calculate(2,3,function(n1,n2){           //calculate function with function in parameter
//     return n1-n2
// }));
// console.log(calculate(2,3,function(n1,n2){           //calculate function with function in parameter
//     return n1*n2
// }));
// console.log(calculate(2,3,function(n1,n2){           //calculate function with function in parameter
//     return n1/n2
// }));

// const arr=[2,5,6,8,9,0,-3,-5,-2];
// const printFirstNegativeNumber=(num) => num<0;
// const result=arr.find(printFirstNegativeNumber);
// console.log(result);

// arr.forEach((num,index)=>{
//     console.log("Element",num,"Index",index);
// })