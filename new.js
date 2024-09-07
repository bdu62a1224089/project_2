let cart = [];


function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = ''; 

   
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name} - Quantity: ${item.quantity}</span>
            <button class="remove-from-cart" data-name="${item.name}">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
}


function addToCart(name, price) {
   
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
      
        cart.push({ name: name, price: price, quantity: 1 });
    }
    updateCartDisplay(); 
    showNotification(); 
}


function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartDisplay();
}


const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseInt(this.getAttribute('data-price'));
        addToCart(name, price);
    });
});


document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('remove-from-cart')) {
        const name = e.target.getAttribute('data-name');
        removeFromCart(name);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const cart = document.getElementById('cart');
    const cartDetailsBtn = document.querySelector('.cart-details-btn');
    const closeCartBtn = document.querySelector('.close-cart');

    cartDetailsBtn.addEventListener('click', function() {
        cart.classList.toggle('open');
    });

    closeCartBtn.addEventListener('click', function() {
        cart.classList.remove('open');
    });
});


function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');

   
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
document.getElementById("mobile-menu").addEventListener("click", function() {
        
    const navList = document.querySelector(".nav-links");
    navList.classList.toggle("active");
    
    this.classList.toggle("open");
});
