// contact form validation
function validate() {
    let name = document.getElementById("name").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";
    let text;

    // Name validation (minimum 3 characters)
    if (name.length < 3) {
        text = "Please enter a valid name (minimum 3 characters)";
        error_message.innerHTML = text;
        return false;
    }

    // Subject validation (minimum 10 characters)
    if (subject.length < 10) {
        text = "Please enter a correct subject (minimum 10 characters)";
        error_message.innerHTML = text;
        return false;
    }

    // Phone validation (only digits, 10–15 length)
    if (!/^\d{10,15}$/.test(phone)) {
        text = "Please enter a valid phone number (10–15 digits)";
        error_message.innerHTML = text;
        return false;
    }

    // Email validation (basic format check)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        text = "Please enter a valid email address";
        error_message.innerHTML = text;
        return false;
    }

    // Message should have between 140 and 500 characters
    if (message.length <= 140) {
        text = "Please enter more than 140 characters";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length > 500) {
        text = "Please enter less than 500 characters";
        error_message.innerHTML = text;
        return false;
    }

    // Success
    alert("Form submitted successfully! Thank you for contacting us.");
    return true;
    clear();
}


// product page 

// Search Function
// function filter() {
//   let input = document.querySelector("input[type='search']");
//   let filterValue = input.value.toUpperCase();
//   let products = document.querySelectorAll("#product-list .col-12");

//   products.forEach(product => {
//     let name = product.querySelector(".product-name").innerText.toUpperCase();
//     if (name.indexOf(filterValue) > -1) {
//       product.style.display = "";
//     } else {
//       product.style.display = "none";
//     }
//   });
// }

function filterProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.getElementsByClassName("product-card");

  for (let i = 0; i < products.length; i++) {
    let productName = products[i].getElementsByTagName("h5")[0].innerText.toLowerCase();
    if (productName.includes(input)) {
      products[i].style.display = "block";  // show product
    } else {
      products[i].style.display = "none";   // hide product
    }
  }
}


// ↕ Sort Function (By Price Ascending)
function sortList() {
  let list = document.getElementById("product-list");
  let items = Array.from(list.getElementsByClassName("col-12"));

  items.sort((a, b) => {
    let priceA = parseInt(a.querySelector(".price").innerText);
    let priceB = parseInt(b.querySelector(".price").innerText);
    return priceA - priceB; // ascending order
  });

  items.forEach(item => list.appendChild(item)); // re-append in sorted order
}

function clear() {
  let name = document.getElementById('name');
  let subject = document.getElementById('subject');
  let phone = document.getElementById('phone');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  name.innerHTML="";
  subject.innerHTML="";
  phone.innerHTML="";
  email.innerHTML="";
  message.innerHTML="";
}

