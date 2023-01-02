var cart = document.querySelector('.cart');
var cart_btn = document.querySelector('#cart_btn');


window.addEventListener('DOMContentLoaded', async (event) => {
   let res = await axios.get('http://localhost:3000/admin/products');

   for(let i=0; i<res.data.length;i++){
      let parent = document.querySelector('.products_row');
      let newDiv = document.createElement('div')
      newDiv.className = 'card';
      newDiv.innerHTML = ` <p class="album">${res.data[i].imageUrl}</p>
                           <img class="card-img-top" src="${res.data[i].imageUrl}" alt="Card image cap">
                           <p class="price" style="margin-top: 0.5rem;">$${res.data[i].price}</p>
                           <button class="btn btn-primary" id="${res.data[i].id}" style="margin-left: 3rem;  margin-right:3rem;  margin-top:1rem;">Add to cart</button>`
   
      parent.append(newDiv);
   }
   cartFetchAll();
});

async function cartFetchAll(){
   let res = await axios.post('http://localhost:3000/cartall/items');
   for(let i=0; i<res.data.length; i++){
      creatingCartContent(res.data[i].imageUrl, res.data[i].title, res.data[i].price);
   }
}

cart_btn.addEventListener("click", () => {
   if (cart.style.visibility == "visible") {
      cart.style.visibility = "hidden"
   } else {
      cart.style.visibility = "visible"
   }
});


async function addToCart(event) {
   event.preventDefault(event);
   let id = event.target.id;
   if(id=="") return;
   let res = await axios.post(`http://localhost:3000/cart/${id}`);
  
   
  creatingCartContent(res.data.item.imageUrl,  res.data.item.title, res.data.item.price )

   let notification = document.querySelector('.notification');
   notification.textContent = res.data.msg;
   notification.style.visibility = "visible";
   setTimeout(()=>{
      notification.style.visibility="hidden";
   },1600);

}

function creatingCartContent(image,title,price){
   let parent = document.querySelector('.ul');
   let cartProduct = document.createElement('li');
   let html = `<div class="cart_contents">
                 <div style="width: 40%;height: 5rem;  display: flex;flex-direction: row; padding: 5px;">
                   <img  src ="${image}"style=" width: 50%;height: 95%;border-radius: 5px;" >
                   <span style="margin-left: 6px;align-self: center;">${title}</span> </div>

                 <div style="width: 16%;height: 5rem;  display: flex;flex-direction: column;justify-content: center;">
                   <span style="align-self: center;">${price}</span> </div>

                 <div style="width: 38%;height: 5rem; display: flex;flex-direction: row;justify-content: space-evenly;">
                  <input class="inc_dec_input" type="number" id="quantity" name="quantity" min="1" max="5" value="1">
                  <button class="remove_btn">Remove</button></div>

               </div> `
   
   cartProduct.innerHTML = html;
   parent.appendChild(cartProduct)
}
