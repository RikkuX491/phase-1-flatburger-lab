// index.js

// Callbacks

// Deliverable # 2 solution code
const displayBurgerDetails = (burger) => {
    const imageElement = document.getElementById('image')
    imageElement.src = burger.image

    const nameElement = document.getElementById('name')
    nameElement.textContent = burger.name

    const numberInCartCountElement = document.getElementById('number-in-cart-count')
    numberInCartCountElement.textContent = burger.number_in_cart
};

// Deliverable # 3 solution code
const addToCart = () => {
    const addToCartForm = document.getElementById('add-to-cart-form')
    addToCartForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const numberToAddInputElement = document.getElementById('number-to-add')
        const numberInCartCountElement = document.getElementById('number-in-cart-count')
        
        const sum = Number(numberToAddInputElement.value) + Number(numberInCartCountElement.textContent)
        
        numberInCartCountElement.textContent = sum
    })
}

// Deliverable # 1 solution code
const addBurgerNamesToMenu = () => {
    fetch("http://localhost:3000/burgers")
    .then(response => response.json())
    .then(burgers => {
        burgers.forEach(burger => {
            const spanElement = document.createElement('span')
            spanElement.textContent = burger.name
            const restaurantMenuElement = document.getElementById('restaurant-menu')
            restaurantMenuElement.appendChild(spanElement)

            // Deliverable # 2 solution code
            spanElement.addEventListener('click', () => {
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