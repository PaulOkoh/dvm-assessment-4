function displayHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let price = document.querySelector('#goal')
    let date = document.querySelector('#date')

    let bodyObj = {
        name: name.value,
        goal: goal.value, 
        date: date.value
    }

    createGoal(bodyObj)

    name.value = ''
    goal.value = ''
    date.value = ''
}

function createGoalCard(goal) {
    const goalCard = document.createElement('div')
    //houseCard.classList.add('house-card')

    houseCard.innerHTML = `<img alt='house cover image' src=${house.imageURL} class="house-cover-image"/>
    <p class="address">${house.address}</p>
    <div class="btns-container">
        <button onclick="updateHouse(${house.id}, 'minus')">-</button>
        <p class="house-price">$${house.price}</p>
        <button onclick="updateHouse(${house.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteHouse(${house.id})">delete</button>
    `


    housesContainer.appendChild(houseCard)
}

function displayHouses(arr) {
    housesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createHouseCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllHouses()