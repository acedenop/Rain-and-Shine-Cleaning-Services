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