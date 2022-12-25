const calculatePricesBtn = document.getElementById('calculate');
const totalCartValue = document.querySelector('#total-value span');
const removeBtns = document.querySelectorAll(".btn.btn-remove");
const createBtn = document.querySelector("#create")
const tFoot = document.querySelector("tfoot");
let tBody = document.querySelector("tbody"); //add (append) new products to this
const newProductNameInput = document.querySelector("#new-product-name");
const newProductPriceInput = document.querySelector("#new-product-price");

// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const priceValue = price.innerText;
  const quantity = product.querySelector(".quantity input");
  const quantityValue = quantity.value; //returns the value prop/attr of quantity
  const subTotalValue = priceValue * quantityValue;
  const subTotal = product.querySelector(".subtotal span");//not sure about .document
  // console.log(subTotal);
  //set the subtotal price to the corresponding DOM element
  subTotal.innerText = subTotalValue;
  // console.log(subTotalValue);
  return subTotalValue;

}


function calculateAll() {
  //calculateAll() triggers the update of subtotals for every product

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // ITERATION 2
  const products = document.getElementsByClassName("product"); //USE QUERYSELECTORALL instead and forEach after
  //we cant use forEach on an HTML collection (but on an node collection yes ?)
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    const productSubTotal = ((updateSubtotal(products[i])));
    //sum the subtotals for each product
    total += productSubTotal;
  };
  console.log(total);
  //display this value in the total DOM element
    //grab the corresponding element in the dom
    //update its inner value
  totalCartValue.innerText = total;

  

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  /* currentTarget always refers to the element to which the event handler has been attached
  (so the removeBtns here)
  as opposed to Event.target which identifies the element on which the event occurred
  and which may be its descendant 
  */
  console.log('The target in remove is:', target);
  //we want to access the <td class="product"></td> whose remove btn was clicked
  const parent = target.parentNode.parentNode.parentNode;
  const productRow = target.parentNode.parentNode;
  parent.removeChild(productRow);
  //make sure total gets updated when removing products from cart
  //we need to subtract the subtotal for the removed product from the total
  //get the current total: we already have: totalCartValue
  //get the subtotal of the product we want to remove (connected to target) 
  const subtotalProduct = productRow.querySelector(".subtotal span");
  //subtract and display it in total
  totalCartValue.innerText -= subtotalProduct.innerText;
}

// ITERATION 5

function createProduct() {
  console.log("create btn is clicked")
  //target the name DOM node - done
  //extract value - done
  //target the unit price input DOM node - done
  //extract value - done
  //add a new row to the table
    //create element
    let newProduct = document.createElement("tr");
    newProduct.classList.add("product");
    //add HTML content inside
    newProduct.innerHTML = `
              <td class="name">
                <span>${newProductNameInput.value}</span>
              </td>

              <td class="price">$<span>${newProductPriceInput.value}</span></td>

              <td class="quantity">
                <input type="number" value="0" min="0" placeholder="Quantity" />
              </td>
              
              <td class="subtotal">$<span>0</span></td>
              
              <td class="action">
                <button class="btn btn-remove">Remove</button>
              </td>
    `
    //append the row to the table
    tBody.appendChild(newProduct);

  //clear input fields in the creation form
  newProductNameInput.value = "";
  newProductPriceInput.value = "";
  //remove button is not working because it's been created AFTER the window is loaded
  //so we need to add functionalities to the new button
  const newRemoveBtn = newProduct.querySelector(".btn.btn-remove");
  console.log(newRemoveBtn);
  newRemoveBtn.addEventListener("click", removeProduct);
}

window.addEventListener('load', () => {
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeBtns.forEach(removeBtn => removeBtn.addEventListener("click", removeProduct));
  createBtn.addEventListener("click", createProduct);
});

  //... your code goes here
;
