//Events

//1.Event Handlers
//single function for an event, old one replaced by new function if added, less preferred
//onclick, onload, onmouseover, onkeypress, onkeydown, onkeyup

function onClickFunc(){
    alert("Box-2 is clicked");
}

function onKeyPress(){
    alert("Key Presed")
}

function onHover(){
    alert("Box-3 hovered")
}

//2.Event Listeners
//Multiple functions,modern, remove easily
const box1=document.getElementById('box-1');
box1.addEventListener('click',(event)=>{
    alert("Box-1 is clicked")       //also used parameter for use
})

// box1.addEventListener('click',()=>{         //two function events for single element both were trigerred 
//     alert("Box-1 hiiiiii")
// })

const cont=document.getElementById('cont');
box1.addEventListener('click',()=>{
    alert("Container is clicked")       //also used parameter for use
},true)                                 //third paramter is for event bubling or capturing, on default it is on false : bubbling(child first then parents), and for true:Capturing(parent first then child )

