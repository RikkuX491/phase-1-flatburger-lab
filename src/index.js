// index.js

// Callbacks
const displayBurgerDetails = (burger) => {
    const imageElement = document.getElementById('image')
    imageElement.src = burger.image
    const nameElement = document.getElementById('name')
    nameElement.textContent = burger.name
    const numberInCartElement = document.getElementById('number-in-cart-count')
    numberInCartElement.textContent = burger.number_in_cart
};

const addToCart = () => {
    // Core Deliverable # 3
    const addToCartForm = document.getElementById('add-to-cart-form')
    addToCartForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const numberToAddInputElement = document.getElementById('number-to-add')
        const numberInCartElement = document.getElementById('number-in-cart-count')
        numberInCartElement.textContent = Number(numberInCartElement.textContent) + Number(numberToAddInputElement.value)
    })
}

const addBurgerNamesToMenu = () => {
    // Core Deliverable # 1
    const restaurantMenuDiv = document.getElementById('restaurant-menu')
    fetch('http://localhost:3000/burgers')
    .then(response => response.json())
    .then(burgers => {
        burgers.forEach(burger => {
            const spanElement = document.createElement('span')
            spanElement.textContent = burger.name
            restaurantMenuDiv.appendChild(spanElement)
            
            // Core Deliverable # 2
            spanElement.addEventListener('click', () => {
                displayBurgerDetails(burger)
            })
        })
    })
};

const main = () => {
    addBurgerNamesToMenu()
    addToCart()
}

main()