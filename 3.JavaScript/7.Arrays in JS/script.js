// //Arrays
// let arrName=[123,456,789]        //diffrent than variable it stors multiple value in single container

// //for example
// let std1="abc";
// let std2="xyz";
// let std3="ikj";      //so we have to write diffrent variable for diffrent student name what if there is more than 3 student , what if the no. of student is 60 we cant write varible 60 time we use Arrays
let studentsArray=["abc","xyz","ikj"];  
// //index number       0     1     2

// console.log(studentsArray);   //print array values
// console.log(studentsArray[0]);  //print value which is in 0 index which is "abc"

// let varArrray=["123",28,true,"xyz",function dummyFunction(){console.log("this is Dummy Function");
// },{name:"Aditya", age:"22"}];    //JS is loosly tight so our is hetrogenous means we can store diffrent data types value, functions, objects in a single Arrays
// console.log(varArrray[4]);
// console.log(studentsArray.length);   // to check array size, (no. of value in a array)

// studentsArray[2]="aditya";
// console.log(studentsArray[2]);

// let newArr=studentsArray;
// console.log(newArr);
// newArr[0]="student";   //it only addres the studentArray memory so both have same memory location so changing each can affect both
// console.log(newArr);   
// console.log(studentsArray);

// console.log(studentsArray.indexOf("xyz"));  //show the index of return value on array if present, if not it show -1.
// console.log(studentsArray.includes("aditya"));     //check if the given value is exist in the array or not, True or False
// studentsArray.push("laptop");      //add the given value in the end of the array
// console.log(studentsArray);
// studentsArray.unshift("Mobile");    //add given value in the start of th array
// console.log(studentsArray);
// studentsArray.pop();                //remove the last elemnt from the array
// studentsArray.shift();              //remove first elemnt of the array
// console.log(studentsArray);

// let marks = [98,78,65,34,66,34,22,92];
//index num  0   1  2  3  4  5  6  7  
// console.log(marks);
// marks.sort();                      //sort array in ascending
// console.log(marks);
// let submarks=marks.slice(2,6);    //slice array from start index to end index except end index value  arrayName.slice(startIndex,endIndex);
// console.log(submarks)


