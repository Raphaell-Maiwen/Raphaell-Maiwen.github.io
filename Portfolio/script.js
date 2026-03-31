const init = ()=>{
    const itemTemplate = document.getElementById("item").content; 

    const items = [{
            name: "Compass",
            description: "An ambitious open-world VR game.",
            thumbnail: "compassPortfolio.gif",
            repo: "WetWhatWhat",
            link: "https://www.meta.com/fr-ca/experiences/compass/7364112793688009/"
        },
        {
            name: "Circle the Drain",
            description: "Short horror game about the rise and fall of a pop icon.",
            thumbnail: "circleTheDrainPortfolio.gif",
            repo: "Circle-the-Drain",
            link: "https://rafiki.itch.io/guitar-ego"
        },
        {
            name: "Guitar Ego",
            description: "Competitive rhythm game where players have to improvise solos.",
            thumbnail: "guitarEgo.png",
            repo: "SimpleRhythmGame",
            link: "https://rafiki.itch.io/guitar-ego"
        }
    ]

    items.forEach((item)=>{
        const root = itemTemplate.cloneNode(true);
        root.querySelector(".name").innerHTML = item.name;
        root.querySelector(".description").innerHTML = item.description;
        root.querySelector(".thumbnail").src = "thumbnails/" + item.thumbnail;
        root.querySelector(".tryIt").href = item.link;
        if(item.repo.includes("https://")){
            root.querySelector(".github").href = item.repo;
        } else {
            root.querySelector(".github").href = "https://github.com/Raphaell-Maiwen/"+item.repo;
        }
        document.body.appendChild(root);
    })
}
