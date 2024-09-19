let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartPage() {
    const cartContent = document.getElementById('cart-content');
    cartContent.innerHTML = '';

    cart.forEach((item, index) => {
        cartContent.innerHTML += `
            <div class="cart-item">
                <h4>${item.name}</h4>
                <p>Price: $${item.price}</p>
                <p>Quantity: 
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                </p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });
}

function updateQuantity(index, newQuantity) {
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartPage();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartPage();
}

function applyCoupon() {
    const coupon = document.getElementById('coupon').value;
    if (coupon === 'DISCOUNT10') {
        alert('10% discount applied!');
        // Apply discount logic here
    } else {
        alert('Invalid coupon code.');
    }
}

function goToPayment() {
    // Save delivery info, then navigate to payment page
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    localStorage.setItem('deliveryInfo', JSON.stringify({ name, address }));

    window.location.href = '/payment';
}

window.onload = function () {
    updateCartPage();
};
