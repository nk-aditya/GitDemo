// console.log(1);
// console.log(2);
// setTimeout(function(){
//     console.log("this will be executed after 3 sec");
// },3000)
// console.log(3);


function getCandie(callback){
    setTimeout(()=>{
        const candie = "🍬";
        console.log("Get Candie",candie);
        callback(candie);
    },2000)
}

function handOverKeys(candie,callback2){
    setTimeout(()=>{
        const key=candie+"🔑";
        console.log("Get Candie and Room Key",key);
        callback2(key)
    },2000)
}

function onboarding(key,callback3){
    setTimeout(()=>{
        const onboarded=key+"📥";
        console.log("Get Candie,Room key and onboarded",onboarded);
        callback3(onboarded)
    },2000)
}

getCandie((candie)=>{
    handOverKeys(candie,(key)=>{
        onboarding(key,(onboarded)=>{
            setTimeout(()=>{
                console.log("Welcome to our Hotel");
            },2000)
            
        })
    })
})
