// index.js

// Callbacks
// Deliverable # 2 solution code
const displayBurgerDetails = (burger) => {
    const detailImageElement = document.getElementById('image')
    detailImageElement.src = burger.image
    const nameElement = document.getElementById('name')
    nameElement.textContent = burger.name
    const numberInCart = document.getElementById('number-in-cart-count')
    numberInCart.textContent = burger.number_in_cart
};

// Deliverable # 3 solution code
const addToCart = () => {
    const addToCartForm = document.getElementById('add-to-cart-form')
    addToCartForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const numberToAddInputElement = document.getElementById('number-to-add')
        const numberInCart = document.getElementById('number-in-cart-count')
        
        const sum = parseInt(numberToAddInputElement.value) + parseInt(numberInCart.textContent)
        numberInCart.textContent = sum
    })
}

// Deliverable # 1 solution code
const addBurgerNamesToMenu = () => {
    fetch('http://localhost:3000/burgers')
    .then(response => response.json())
    .then(burgers => {
        burgers.forEach(burger => {
            const span = document.createElement('span')
            span.textContent = burger.name
            const restaurantMenu = document.querySelector('#restaurant-menu')
            restaurantMenu.appendChild(span)

            span.addEventListener('click', () => {
                displayBurgerDetails(burger)
            })
        })
    })
};

const main = () => {
    // Deliverable # 1 & 3 solution code
    document.addEventListener('DOMContentLoaded', () => {
        addBurgerNamesToMenu()
        addToCart()
    })
}

main()