let a=123;
a='aditya'; //JS is loosely tighten programming language which means we can change the value of variable with diffrent data type without mentioning anything in code.

console.log("The value of a is",a);
console.log("The type of a is",typeof(a)); //typeof() is a inbuilt method  to check the data type of value of a variable

let b;

// let a=20;
// let b=10;
// let sum;  //here we just declare
// sum=a+b;

// let a=20;
// let b=10;
// let sum=0; //here we initialise with zero, always recommended to do so to avoid any type of gargabe value.
// sum=a+b;


console.log("The type of a is",typeof(b)); //type of variabl which dont have any value and just declare not initialise is "undefinded"

let c=null;
console.log("The value of null is",null);   //value of c is null
console.log("The type of null is",typeof(null)); //type of c is object, because of null

let v1=12;
console.log(v1+1);  //normal adding with number type

let v2="12";
console.log(v2+1); //string concatenation with string type

let abc=123;
abc = String(abc); //change abc type from numberto String
console.log("The value of abc is",abc);
console.log("The type of abc is",typeof(abc));

let name="aditya";
name=Number(name);
console.log("The value of name is",name)           
console.log("The type of name is",typeof(name));       // type is number nut it show value as "Nan" means bot a number , why? beacuse name is not a number we can only changea string to number if it is a number.

name="123";
name=Number(name);
console.log("The value of name is",name)           
console.log("The type of name is",typeof(name));  // it show th value 123 and the type as number

name= 123;
name=Boolean(name);
console.log("The value of name is",name)           
console.log("The type of name is",typeof(name)); //now type is boolean and value is true why? because expet 0 everthing in boolean consider as true. weather it is a number, string,etc.
