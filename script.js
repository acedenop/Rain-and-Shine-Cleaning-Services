"use strict"

document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

let subtotal = 0;
const taxRate = 0.10;
const shipping = 10;

document.querySelectorAll(".add-service").forEach(button => {
    button.addEventListener("click", function() {
        let price = parseFloat(this.getAttribute("data-price"));
        subtotal += price;
        updateTotal();
    });
});

function updateTotal() {
    let tax = subtotal * taxRate;
    let total = subtotal + tax + shipping;
    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("tax").textContent = tax.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
}

document.getElementById("checkout").addEventListener("click", function() {
    if (subtotal === 0) {
        document.getElementById("checkout-message").textContent = "Please add services before checking out.";
    } else {
        document.getElementById("checkout-message").textContent = `Thank you for your order! Total: $${document.getElementById("total").textContent}`;
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    if (name === "") {
        document.getElementById("name-error").textContent = "Name is required.";
        valid = false;
    } else {
        document.getElementById("name-error").textContent = "";
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById("email-error").textContent = "Enter a valid email.";
        valid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    if (message === "") {
        document.getElementById("message-error").textContent = "Message cannot be empty.";
        valid = false;
    } else {
        document.getElementById("message-error").textContent = "";
    }

    if (valid) {
        document.getElementById("form-message").textContent = "Thank you for reaching out!";
        document.getElementById("contact-form").reset();
    }
});