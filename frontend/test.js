var cart = document.querySelector('.cart');
var cart_btn = document.querySelector('#cart_btn');
// let visibility = element.getAttribute("hidden");

cart_btn.addEventListener("click", () => {
    if (cart.style.visibility=="visible") {
        cart.style.visibility = "hidden"
     } else {
        cart.style.visibility="visible"
     }
  });

  