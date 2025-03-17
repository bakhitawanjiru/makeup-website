document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.custom-card');
        
        cards.forEach(card => {
            const title = card.querySelector('.card-body p').textContent.toLowerCase();
            const price = card.querySelector('.card-title').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || price.includes(searchTerm)) {
                card.closest('.col').style.display = '';
            } else {
                card.closest('.col').style.display = 'none';
            }
        });
    });
});

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.custom-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.card-body p').textContent.toLowerCase();
        const price = card.querySelector('.card-title').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || price.includes(searchTerm)) {
            card.closest('.col').style.display = '';
        } else {
            card.closest('.col').style.display = 'none';
        }
    });
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        showAlert('Login successful! Redirecting...', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    } else {
        showAlert('Invalid email or password', 'danger');
    }
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} mt-3`;
    alertDiv.textContent = message;
    
    const form = document.getElementById('loginForm');
    form.insertAdjacentElement('beforebegin', alertDiv);
    
    setTimeout(() => alertDiv.remove(), 3000);
}
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.card.custom-card');
    let found = false;

    productCards.forEach(card => {
        const title = card.querySelector('.card-body p').textContent.toLowerCase();
        const price = card.querySelector('.card-title').textContent.toLowerCase();
        
        if (title.includes(searchInput) || price.includes(searchInput)) {
            card.closest('.col').style.display = '';
            found = true;
        } else {
            card.closest('.col').style.display = 'none';
        }
    });

    
    showNoResults(!found);
}

function showNoResults(show) {
    let noResults = document.getElementById('noResults');
    
    if (show) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.id = 'noResults';
            noResults.className = 'alert alert-info text-center mt-3';
            noResults.textContent = 'No products found';
            document.querySelector('.row').after(noResults);
        }
    } else if (noResults) {
        noResults.remove();
    }
}


document.getElementById('searchInput').addEventListener('keyup', searchProducts);
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const productCards = document.querySelectorAll('.custom-card');
        let found = false;

        productCards.forEach(card => {
            const title = card.querySelector('.card-body p')?.textContent.toLowerCase() || '';
            const price = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
            const cardContainer = card.closest('.col');

            if (title.includes(searchTerm) || price.includes(searchTerm)) {
                cardContainer.style.display = '';
                found = true;
            } else {
                cardContainer.style.display = 'none';
            }
        });

    
        showNoResults(!found);
    });
});

function showNoResults(show) {
    let noResults = document.getElementById('noResults');
    
    if (show) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.id = 'noResults';
            noResults.className = 'alert alert-info text-center mt-4';
            noResults.textContent = 'No products found';
            document.querySelector('.row').after(noResults);
        }
    } else if (noResults) {
        noResults.remove();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.custom-card');
            let found = false;

            cards.forEach(card => {
                const title = card.querySelector('.card-body p').textContent.toLowerCase();
                const price = card.querySelector('.card-title').textContent.toLowerCase();
                const cardContainer = card.closest('.col');

                if (title.includes(searchTerm) || price.includes(searchTerm)) {
                    cardContainer.style.display = '';
                    found = true;
                } else {
                    cardContainer.style.display = 'none';
                }
            });

            showNoResults(!found);
        });
    }
});

function showNoResults(show) {
    let noResults = document.getElementById('noResults');
    
    if (show) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.id = 'noResults';
            noResults.className = 'alert alert-info text-center mt-4';
            noResults.textContent = 'No products found';
            document.querySelector('.row').after(noResults);
        }
    } else if (noResults) {
        noResults.remove();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.custom-card');
            let found = false;

            cards.forEach(card => {
                const title = card.querySelector('.card-body p').textContent.toLowerCase();
                const price = card.querySelector('.card-title').textContent.toLowerCase();
                const cardContainer = card.closest('.col');

                if (title.includes(searchTerm) || price.includes(searchTerm)) {
                    cardContainer.style.display = '';
                    found = true;
                } else {
                    cardContainer.style.display = 'none';
                }
            });

            showNoResults(!found);
        });
    }
});

function showNoResults(show) {
    let noResults = document.getElementById('noResults');
    
    if (show) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.id = 'noResults';
            noResults.className = 'alert alert-info text-center mt-4';
            noResults.textContent = 'No products found';
            document.querySelector('.row').after(noResults);
        }
    } else if (noResults) {
        noResults.remove();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.custom-card');
            let found = false;

            cards.forEach(card => {
                const title = card.querySelector('.card-body p').textContent.toLowerCase();
                const price = card.querySelector('.card-title').textContent.toLowerCase();
                const cardContainer = card.closest('.col');

                if (title.includes(searchTerm) || price.includes(searchTerm)) {
                    cardContainer.style.display = '';
                    found = true;
                } else {
                    cardContainer.style.display = 'none';
                }
            });

            showNoResults(!found);
        });
    }
});

function showNoResults(show) {
    let noResults = document.getElementById('noResults');
    
    if (show) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.id = 'noResults';
            noResults.className = 'alert alert-info text-center mt-4';
            noResults.textContent = 'No products found';
            document.querySelector('.row').after(noResults);
        }
    } else if (noResults) {
        noResults.remove();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.custom-card');
            let found = false;

            cards.forEach(card => {
                const title = card.querySelector('.card-body p').textContent.toLowerCase();
                const price = card.querySelector('.card-title').textContent.toLowerCase();
                const cardContainer = card.closest('.col');

                if (title.includes(searchTerm) || price.includes(searchTerm)) {
                    cardContainer.style.display = '';
                    found = true;
                } else {
                    cardContainer.style.display = 'none';
                }
            });

            showNoResults(!found);
        });
    }
});

function showNoResults(show) {
    let noResults = document.getElementById('noResults');
    
    if (show) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.id = 'noResults';
            noResults.className = 'alert alert-info text-center mt-4';
            noResults.textContent = 'No products found';
            document.querySelector('.row').after(noResults);
        }
    } else if (noResults) {
        noResults.remove();
    }
}
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="col-12 text-center">
                <p>Your cart is empty</p>
                <a href="index.html" class="btn btn-primary">Continue Shopping</a>
            </div>`;
        totalElement.textContent = '0.00';
    } else {
        cartContainer.innerHTML = cart.map(item => {
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
            total += price;
            return `
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">Price: Ksh.${item.price}</p>
                            <button onclick="removeFromCart(${item.id})" class="btn btn-danger">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        totalElement.textContent = total.toFixed(2);
    }
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
    showNotification('Item removed from cart');
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cartCount) {
        cartCount.textContent = cart.length;
        cartCount.style.display = cart.length > 0 ? 'block' : 'none';
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <div class="notification-content">
            <div class="notification-message">${message}</div>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Initialize cart display when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    updateCartCount();
});
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
        totalElement.textContent = '0.00';
    } else {
        cartContainer.innerHTML = cartItems.map(item => {
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
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

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

function handleSignup(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (!email || !password) {
        showNotification('Please fill in all fields', 'error');
        return false;
    }

    
    const users = JSON.parse(localStorage.getItem('users'));
    if (users.some(user => user.email === email)) {
        showNotification('Email already registered', 'error');
        return false;
    }

  
    users.push({
        email: email,
        password: password, 
        dateJoined: new Date().toISOString()
    });

    
    localStorage.setItem('users', JSON.stringify(users));

   
    showNotification('Account created successfully!', 'success');

    
    setTimeout(() => {
        window.location.href = 'contact.html';
    }, 1500);

    return false;
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