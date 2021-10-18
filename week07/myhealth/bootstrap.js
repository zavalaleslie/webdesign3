if (window.addEventListener) {


  window.addEventListener("load", init, false);

} 
function addProduct() {
var counter=parseInt(document.getElementById("counter").innerHTML)
counter+=1
document.getElementById("counter").innerHTML=counter
}




function init() {
  var buttonCart = document.getElementById("btn");


  if (buttonCart.addEventListener) {

  buttonCart.addEventListener("click", addProduct, false);


  } 


  
}





if (window.addEventListener) {


  window.addEventListener("load", init, false);

} 

