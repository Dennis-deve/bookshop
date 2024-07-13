document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCount = document.querySelector('#cart-count');

    let cartItemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartItemCount++;
            cartCount.innerText = cartItemCount;
            // The frontend developer should please display a confirmation message after book has been added to cart.
            const bookTitle = button.getAttribute('data-book-title');
            alert(`${bookTitle} added to cart!`);
        });
    });
});
