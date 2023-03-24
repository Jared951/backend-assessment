let baseURL = 'http://localhost:4000'


// html elements
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("getFortuneButton")
const inputFortune = document.querySelector("#addButton")



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

//post function
const addFortune = () => {
    
    // let bodyObj = {
    //     name: fortuneInput.value
    // }

    axios.post(`${baseURL}/api/fortune`, bodyObj)
        .then((res) => {
            // const list = document.getElementById('list')
            // const li = document.createElement('li')
            // li.appendChild(document.createTextNode(res.data))
            // list.appendChild(li)
            })
        .catch((err) => {
            console.log(err)
        })
}

//event listeners
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
inputFortune.addEventListener('click', addFortune)
