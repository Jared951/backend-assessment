// let fortuneArray = ['Love lights up the world.', 'Love truth, but pardon error.', 'Miles are covered one step at a time.']
let fortuneArray = ["Believe it can be done.", "Courtesy is contagious.", "The night life is for you."];

module.exports = {

    
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }, 

    getFortune: (req, res) => {
        const fortunes = ["Believe it can be done.", "Courtesy is contagious.", "The night life is for you."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    //get fortune
    getAllOfTheFortunes: (req, res) => {
        res.status(200).send(fortuneArray)
    },

    //post fortune
    addFortune: (req, res) => {
        let {name} = req.body
        console.log(name)
        fortuneArray.push(name)
        res.status(200).send(fortuneArray)
    },

    //delete fortune
    deleteFortune: (req, res) => {
        let index = req.params.id - 1
        fortuneArray.splice(index, 1)
        res.status(200).send(fortuneArray)
    },

    //put fortune
    // putFortune: (req, res) => {
    //     let index = req.params.id - 1
    //     fortuneArray.push(index, 1)
    //     res.status(200).send(fortuneArray)
    // }
}

