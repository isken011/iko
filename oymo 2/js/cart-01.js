let cart = [];

function addToCart(productName, productPrice) {
    // Проверяем, есть ли продукт уже в корзине
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    renderCart();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>${item.price * item.quantity}С</span>
            <button onclick="removeFromCart('${item.name}')">Удалить</button>
        `;
        cartContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    document.getElementById('total').innerText = `Итого: ${total}С`;
}


