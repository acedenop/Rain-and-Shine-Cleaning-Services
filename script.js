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