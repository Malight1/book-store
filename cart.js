const cartItemsContainer = document.querySelector(".cart-items");



function displayCart() {
    console.log(cart); // Check the content of the cart array
    cartItemsContainer.innerHTML = ""
    cart.forEach((item) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>Price: $${item.price}</p>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
    updateCartCount();
}

displayCart();
