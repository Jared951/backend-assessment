console.log("It's working!")

let baseURL = 'http://localhost:4000'

let fortuneArray = [
    'Love lights up the world.', 
    'Love truth, but pardon error.', 
    'Miles are covered one step at a time.'
]


// html elements
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("getFortuneButton")
const getAllFortune = document.querySelector('#getAllFortune')
const fortuneDiv = document.querySelector('#fortuneDisplay')
const fortuneInput = document.querySelector('#newFortune')
const addFortuneBtn = document.querySelector('#addButton')
const deleteBtn = document.querySelector('#deleteButton')
const deleteInput = document.querySelector('#fortuneId')
// const putBtn = document.querySelector('putButton')
// const putInput = document.querySelector('fortunePut')


//already here
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

//new feature function
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

//get all fortunes from array
const getAll = () => {
    
    fortuneDiv.innerHTML = ''

    axios.get(`${baseURL}/api/fortunes`)
        .then((res) => {
            // console.log(res.data)
            
            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                fortuneDiv.appendChild(newSpan)
                }
            })
        .catch((err) => {
            console.log(err)
        })
}

//post fortunes
const addFortune = () => {
    fortuneDiv.innerHTML = ''

    let bodyObj = {
        name: fortuneInput.value
    }

    axios.post(`${baseURL}/api/fortune`, bodyObj)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                fortuneDiv.appendChild(newSpan)
                }
            })
        .catch((err) => {
            console.log(err)
        })
}

//delete fortune
const deleteFortune = () => {
    fortuneDiv.innerHTML = ''

    let idToDelete = deleteInput.value

    axios.delete(`${baseURL}/api/fortune/${idToDelete}`)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                fortuneDiv.appendChild(newSpan)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

//put fortune
// const putFortune = () => {
//     fortuneDiv.innerHTML = ''

//     let existingFortune = req.params.fortuneArray 
//     let idToPut = req.body.fortuneArray
//     axios.put(`${baseURL}/api/fortune/${idToPut}`) {
//         for (let i = 0; i < fortuneArray.length; i++) {
//             if (fortuneArray[i] === existingFortune) {
//                 fortuneArray = newFortune
//             }
//         }
//     }

// }


//event listeners
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getAllFortune.addEventListener('click', getAll)
addFortuneBtn.addEventListener('click', addFortune)
deleteBtn.addEventListener('click', deleteFortune)
// putBtn.addEventListener('click', putFortune)

// getAll()