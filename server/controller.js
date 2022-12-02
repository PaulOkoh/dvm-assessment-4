module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["If you look in the right places, you can find some good offerings",
            "If you think you can do a thing or think you can't do a thing, you're right",
            "If you wish to see the best in others, show the best of yourself",
            "If your desires are not extravagant, they will be granted",
            "If you're feeling down, try throwing yourself into your work",
            "Imagination rules the world",
            "In order to take, one must first give"]; 

            let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomFortuneIndex];
      
        res.status(200).send(randomFortune);


    }


}