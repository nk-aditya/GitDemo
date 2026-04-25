// const ticket = new Promise(function(resolve,reject){
//     const isBoard = true;
//     if(isBoard){
//         resolve("you are ok to oboard");
//     }else{
//         reject("you are not eligible to onBoard ")
//     }
// })    

// ticket.then((data)=>{
//     console.log("wohoo",data);
// }).catch((data)=>{
//     console.log("Oh no",data);
// }).finally(()=>{
//     console.log("This will be excecuted all time");
// })

// function getCandies(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         const candie="🍬";
//         resolve(candie);
//     }, 3000);
//     })
// }

// function handoverkeys(candie){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         const key="🔑"+candie;
//         // resolve(key);
//         reject("key not found")
//     }, 3000);
//     })
// }

// function onboarding(key){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         const onboard="📥"+key;
//         resolve(onboard);
//     }, 3000);
//     })
// }

//async await
// async function onboardClient(){
//     try{
//         const candie=await getCandies();
//         console.log("here is your candies",candie);

//         const key=await handoverkeys(candie);
//         console.log("here is your key",key);

//         const onboard=await onboarding(key);
//         console.log("welcome to our restaurant",onboard);
//     }
//     catch(err){
//         console.log("Error Ocuured :",err);
//     }
//     console.log("Happy to assist you");
// }

// onboardClient();


//then , catch and Finally
// getCandies()
// .then((candie)=>{
//     console.log("Here is your candy",candie);
//     return handoverkeys(candie)
// })
// .then((key)=>{
//     console.log("Here is your key",key);
//     return onboarding(key)
// })
// .then((onboard)=>{
//     console.log("Here is your onboarding process",onboard);
//     return handoverkeys(onboard)
// })
// .catch((err)=>{
//     console.log("error occured :",err)
// })
// .finally(()=>{
//     console.log("Happy to asist you")