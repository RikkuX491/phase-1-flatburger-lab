// index.js

// Callbacks
const displayBurgerDetails = (burger) => {
    const imageElement = document.getElementById('image')
    imageElement.src = burger.image
    
    const nameElement = document.getElementById('name')
    nameElement.textContent = burger.name

    const numberInCartCountElement = document.getElementById('number-in-cart-count')
    numberInCartCountElement.textContent = burger.number_in_cart
};

const addToCart = () => {
    const addToCartForm = document.getElementById('add-to-cart-form')
    addToCartForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const numberInCartCountElement = document.getElementById('number-in-cart-count')
        const numberToAddInputElement = document.getElementById('number-to-add')
        
        numberInCartCountElement.textContent = Number(numberToAddInputElement.value) + Number(numberInCartCountElement.textContent)
    })
}

const addBurgerNamesToMenu = () => {
    const restaurantMenu = document.getElementById('restaurant-menu')

    fetch('http://localhost:3000/burgers')
    .then(response => response.json())
    .then(burgers => {
        burgers.forEach(burger => {
            const spanElement = document.createElement('span')
            spanElement.textContent = burger.name

            // Advanced Deliverable # 2
            const divElement = document.createElement('div')
            const deleteButton = document.createElement('button')
            deleteButton.textContent = "DELETE"
            deleteButton.addEventListener('click', () => {
                divElement.remove()
            })
            divElement.appendChild(spanElement)
            divElement.appendChild(deleteButton)
            restaurantMenu.appendChild(divElement)

            // Deliverable # 2 solution code
            spanElement.addEventListener('click', () => {
                displayBurgerDetails(burger)
            })
        })

        // Advanced Deliverable # 1
        displayBurgerDetails(burgers[0])
    })
};

const main = () => {
    // Add an event listener to document so that document will listen for the DOMContentLoaded event and execute code in response to the event.
    // This will ensure that the addBurgerNamesToMenu() and addToCart() functions will be called after the DOM has fully loaded.
    document.addEventListener('DOMContentLoaded', () => {
        // Deliverable # 1 solution code
        addBurgerNamesToMenu()

        // Deliverable # 3 solution code
        addToCart()
    })
}

main()