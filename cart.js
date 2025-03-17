let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(button) {
    const card = button.closest('.custom-card');
    if (!card) {
        console.error('Card element not found');
        return;
    }

    const product = {
        id: Date.now(),
        name: card.querySelector('.card-body p').textContent,
        price: card.querySelector('.card-title').textContent,
        image: card.querySelector('.card-img-top').src,
        quantity: 1
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Item added to cart!');
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    
    if (!cartContainer || !totalElement) return;

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = `
            <div class="col-12 text-center">
                <p>Your cart is empty</p>
                <a href="index.html" class="btn btn-primary">Continue Shopping</a>
            </div>`;
        totalElement.textContent = '0';
    } else {
        cartContainer.innerHTML = cartItems.map(item => {
            const price = parseFloat(item.price.replace(/[^0-9]+/g, ''));
            total += price;
            return `
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">Price: ${item.price}</p>
                            <button onclick="removeFromCart(${item.id})" class="btn btn-danger">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>`;
        }).join('');
        
        totalElement.textContent = total.toFixed(2);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
    showNotification('Item removed from cart');
}

function updateCartCount() {
    const count = cart.length;
    let badge = document.querySelector('.cart-count');
    
    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'cart-count';
        const cartIcon = document.querySelector('.fa-cart-plus');
        if (cartIcon) {
            cartIcon.parentElement.appendChild(badge);
        }
    }
    
    badge.textContent = count;
    badge.style.display = count > 0 ? 'block' : 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    updateCartCount();
});

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        showNotification('Cart is empty!', 'error');
        return;
    }

    
    const total = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[^0-9]+/g, ''));
        return sum + price;
    }, 0);

    
    const orderSummary = {
        orderId: 'ORD-' + Date.now(),
        items: cart,
        total: total,
        date: new Date().toLocaleDateString()
    };

    
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderSummary);
    localStorage.setItem('orders', JSON.stringify(orders));

    
    localStorage.setItem('cart', '[]');
    cart.length = 0;


    showNotification('Order placed successfully! Thank you for shopping with us.');

    
    setTimeout(() => {
        window.location.href = `order-confirmation.html?orderId=${orderSummary.orderId}`;
    }, 2000);
}
// Add these functions after your existing cart functions

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }

    // Calculate total
    const total = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[^0-9]+/g, ''));
        return sum + price;
    }, 0);

    // Create order object
    const order = {
        orderId: generateOrderId(),
        items: cart,
        total: total,
        date: new Date().toLocaleString(),
        status: 'confirmed'
    };

    // Save order
    saveOrder(order);

    // Clear cart
    localStorage.setItem('cart', '[]');

    // Show success message and redirect
    showNotification('Order placed successfully!');
    setTimeout(() => {
        window.location.href = `check.html?orderId=${order.orderId}`;
    }, 1500);
}

function generateOrderId() {
    return 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
        <div class="notification-content">
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}