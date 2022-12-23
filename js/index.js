const calculatePricesBtn = document.getElementById('calculate');
const totalCartValue = document.querySelector('#total-value span')

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
  const products = document.getElementsByClassName("product");
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

  
 

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
