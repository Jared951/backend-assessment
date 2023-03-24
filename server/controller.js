let fortuneArray = ['Love lights up the world.', 'New ideas could be profitable.', 'Now is a good time to buy stock.']

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

    addFortune: (req, res) => {
        let {name} = req.body
        fortuneArray.push(name)
        console.log(name)
        res.status(200).send(fortuneArray)
    },

    

}

console.log(fortuneArray)