var modal = document.getElementsByClassName("company-model");

// Get the button that opens the modal
var btn = document.getElementsByClassName("company-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");


// 1
// When the user clicks the button, open the modal 
btn[0].onclick = function() {
  modal[0].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  modal[0].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
}

// 2
btn[1].onclick = function() {
    modal[1].style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span[1].onclick = function() {
    modal[1].style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal[1]) {
      modal[1].style.display = "none";
    }
  }

//   3
btn[0].onclick = function() {
    modal[0].style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span[0].onclick = function() {
    modal[0].style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal[0]) {
      modal[0].style.display = "none";
    }
  }