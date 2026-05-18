const btns = document.querySelectorAll(".add-btn");
const cartItems=document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price")
let cart=[];

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        const item=btn.closest(".item");
        const serviceName=item.querySelector(".service-name").textContent;
        const priceText=item.querySelector(".price").textContent;
        const price = Number(priceText.replace("₹","").replace(".00",""));
        if(btn.textContent=="Add"){
            cart.push({id:i,
                       name:serviceName,
                       price:price,
            });

            console.log(cart);
            btn.textContent="Remove";
            btn.style.backgroundColor="#ff000030"
            btn.style.border= "1px solid #ff0000"
            btn.style.color="#ff0000"
        }
        else{
            cart=cart.filter(service=>service.id !== i);
            console.log(cart);
            btn.textContent = "Add";

            btn.style.backgroundColor = "#238aff";

            btn.style.color = "#fff";

            btn.style.border = "1px solid #238aff";
        }
        updateCart();

    });

    function updateCart(){
        cartItems.innerHTML="";
        if(cart.length==0){
            cartItems.innerHTML= `
                <p>&#9432;</p>
                <p>No Services Selected</p>
                <p>Choose services from the list to begin your booking.</p>
            `;
            totalPrice.textContent=0;
            return;
        }

        let total = 0;
        cart.forEach((item,i)=>{
            total+= item.price;
            cartItems.innerHTML += `
                <div class="bill-item">
    
                    <p>${i + 1}</p>
    
                    <p>${item.name}</p>
    
                    <p>₹${item.price}</p>
    
                </div>
            `;
        });
        totalPrice.textContent="₹ " + total;
    }
   
});
