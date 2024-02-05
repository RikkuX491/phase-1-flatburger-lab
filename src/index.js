// index.js

let currentlyDisplayedBurger

// Callbacks
const displayBurgerDetails = (burger) => {
    currentlyDisplayedBurger = burger
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

            // Advanced Deliverable # 2
            const burgerDiv = document.createElement('div')
            const deleteButton = document.createElement('button')
            deleteButton.textContent = "DELETE"
            deleteButton.addEventListener('click', () => {
                deleteButton.parentNode.remove()
                if(currentlyDisplayedBurger.id === burger.id){
                    const defaultData = {
                        name: "Name Of Burger",
                        image: "./assets/image-placeholder.jpg",
                        number_in_cart: "[X]"
                    }
                    displayBurgerDetails(defaultData)
                }
            })
            burgerDiv.appendChild(spanElement)
            burgerDiv.appendChild(deleteButton)

            restaurantMenuDiv.appendChild(burgerDiv)
            
            // Core Deliverable # 2
            spanElement.addEventListener('click', () => {
                displayBurgerDetails(burger)
            })
        })

        // Advanced Deliverable # 1
        displayBurgerDetails(burgers[0])
    })
};

const main = () => {
    addBurgerNamesToMenu()
    addToCart()
}

main()