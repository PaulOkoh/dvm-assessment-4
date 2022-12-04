const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneBtn");
const goalBtn = document.querySelector("#goalBtn");
const yourName = document.querySelector("#name");
const yourGoal = document.querySelector("#goal");
const date = document.querySelector("#date");
const formDisplay = document.querySelector(".formDisplay");
const fortuneDisplay = document.querySelector(".displayFortune");
const doggyBtn = document.querySelector(".doggy");
const dogDisplay = document.querySelector(".dogDisplay");
// const deleteBtn = document.querySelector(".deleteBtn");

let baseURL = "http://localhost:4000/api"

const goalsCallback = ({ data: goals }) => displayGoals(goals)
const errCallback = err => console.log(err)

const createGoalsCard = (goal) => {
    let goalCard = document.createElement("div")
    // let dltBtn = document.createElement("button")
    // dltBtn.textContent = "Delete Goal"
  goalCard.innerHTML = `<h3>My name is ${goal.name}</h3>
    <h3>My goal is ${goal.goal}</h3>
    <h3>My start date is ${goal.date}</h3>
    <button onclick="deleteGoal(${goal.id})">Delete</button>
    `;
    // goalCard.appendChild(dltBtn)
    // formDisplay.appendChild(goalCard)
    // dltBtn.addEventListener("click", deleteGoal)
    // dltBtn.addEventListener("click", getDeleteIndex)

    formDisplay.appendChild(goalCard)

    function getDeleteIndex(event) {
        console.log(event.target.parentNode)
    }
    
};


const displayFortune = (element) => {
  fortuneDisplay.innerHTML = `<h2>${element}</h2>`;
};

function clearDisplay() {
  formDisplay.innerHTML = "";
}



const getCompliment = () => {
  axios.get(`${baseURL}/compliment/`).then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  fortuneDisplay.innerHTML = "";
  axios.get(`${baseURL}/fortune/`).then((res) => {
    const data = res.data;
    console.log(data);
    displayFortune(data);
  });
};

const addGoal = (event) => {
  event.preventDefault();
  clearDisplay();

  let newGoalObj = {
    name: yourName.value,
    goal: yourGoal.value,
    date: date.value,
  };
  axios
    .post(`${baseURL}/goals/`, newGoalObj)
    .then((res) => {
      console.log("clicked displayBtn");
      console.log(res)
      
      for (let i = 0; i < res.data.length; i++) {
        createGoalsCard(res.data[i]) 
      }
    })
    .catch((err) => console.log(err));

  yourName.value = "";
  yourGoal.value = "";
  date.value = "";
};

const getCuteDogs = () => {
  dogDisplay.innerHTML = "";
  axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
    let data = res.data.message;
    let image = document.createElement("img");
    image.src = data;
    dogDisplay.appendChild(image);
  });
};

const deleteGoal = (id) =>
  axios
    .delete(`http://localhost:4000/api/goals/${id}`)
    .then((res) => {
        clearDisplay()
        console.log(res.data)
    })
    .catch((err) => console.log(err));


//     const deleteGoal = (id) =>
//   axios
//     .delete(`${baseURL}/goals/${id}`)
//     .then(({ data: goals }) => displayGoals(goals) )
//     .catch((err) => console.log(err));


    


//EventListeners

doggyBtn.addEventListener("click", getCuteDogs);

complimentBtn.addEventListener("click", getCompliment);

fortuneBtn.addEventListener("click", getFortune);

goalBtn.addEventListener("click", addGoal);



function displayGoals(arr) {
    formDisplay.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createGoalsCard(arr[i])
    }
}




// form.addEventListener('submit', displayHandler)

//getAllGoals()