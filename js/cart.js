/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
  console.log("loaded", state.cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  console.log("inside render")
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableCart = document.getElementById('cart');
  tableCart.innerHTML = "";
  console.log("clear", state.cart);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  console.log("show", state.cart);
  let tableCart = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < state.cart.items.length; i++) {
    const item = state.cart.items[i];
    console.log(item, "item")
    var table_row  = document.createElement('tr'); 
    var table_data  = document.createElement('td'); 
    table_data.textContent = `${item["product"]}   ${item["product"]}`;
    table_row.appendChild(table_data)
    tableCart.appendChild(table_row)// 
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  }


}

function removeItemFromCart(event) {
  console.log(event)
}

// This will initialize the page and draw the cart on screen
renderCart();
