const redBox= document.getElementById('redBox');

redBox.addEventListener('click',(event)=>{
    redBox.style.backgroundColor="red";
    redBox.style.border="1px solid red";
    redBox.style.color="white";
})

const blueBox= document.getElementById('blueBox');

blueBox.addEventListener('click',(event)=>{
    blueBox.style.backgroundColor="blue";
    blueBox.style.border="1px solid blue";
    blueBox.style.color="white";
})

const greenBox= document.getElementById('greenBox');

greenBox.addEventListener('click',(event)=>{
    greenBox.style.backgroundColor="green";
    greenBox.style.border="1px solid green";
    greenBox.style.color="white";
})

const yellowBox= document.getElementById('yellowBox');

yellowBox.addEventListener('click',(event)=>{
    yellowBox.style.backgroundColor="#ffe600";
    yellowBox.style.border="1px solid #ffe600";
    yellowBox.style.color="white";
})

const input = document.getElementById('name');
const button = document.getElementById('submit');
const heading = document.getElementById('heading');

button.addEventListener('click',(event=>{
    event.preventDefault();
    const name = input.value;
    heading.innerText=`Hello, ${name}`;
}));