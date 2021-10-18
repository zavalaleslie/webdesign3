if (window.addEventListener) {


  window.addEventListener("load", init, false);

} 


function removeAlert() {
document.getElementById("anything").remove()
}

function init() {

  var alert=document.getElementById("alert");

  if (alert.addEventListener) {

    alert.addEventListener("click", removeAlert, false);
  }
}





if (window.addEventListener) {


  window.addEventListener("load", init, false);

} 

