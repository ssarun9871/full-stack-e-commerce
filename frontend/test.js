var cart = document.querySelector('.cart');
var cart_btn = document.querySelector('#cart_btn');

cart_btn.addEventListener("click", () => {
   if (cart.style.visibility == "visible") {
      cart.style.visibility = "hidden"
   } else {
      cart.style.visibility = "visible"
   }
});

function addToCart(event) {
   event.preventDefault(event);
   
   let id = event.target.id;

   let element = document.getElementById(id);
   let img = element.children[1].src
   let product_name = element.children[0].textContent
   let price = element.children[2].textContent;


   let parent = document.querySelector('.ul');
   let product = document.createElement('li');
   let html = `<div class="cart_contents">
                 <div style="width: 40%;height: 5rem;  display: flex;flex-direction: row; padding: 5px;">
                   <img  src ="${img}"style=" width: 50%;height: 95%;border-radius: 5px;" >
                   <span style="margin-left: 6px;align-self: center;">${product_name}</span> </div>

                 <div style="width: 16%;height: 5rem;  display: flex;flex-direction: column;justify-content: center;">
                   <span style="align-self: center;">${price}</span> </div>

                 <div style="width: 38%;height: 5rem; display: flex;flex-direction: row;justify-content: space-evenly;">
                  <input class="inc_dec_input" type="number" id="quantity" name="quantity" min="1" max="5" value="1">
                  <button class="remove_btn">Remove</button></div>

               </div> `
   
   product.innerHTML = html;
   parent.appendChild(product)

   let notification = document.querySelector('.notification');
   notification.style.visibility = "visible";
   setTimeout(()=>{
      notification.style.visibility="hidden";
   },1600);

}

