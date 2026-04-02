const init = ()=>{
    const itemTemplate = document.getElementById("item").content; 

    const items = [{
            name: "Compass",
            description: `An ambitious open-world VR game.
            <br>Tasks / Responsibilities:
            <ul>
                <li>Blabla</li>
                <li>Pouet</li>
                <li>Blabla</li>
                <li>Pouet</li>
                <li>Blabla</li>
                <li>Pouet</li>
                <li>Blabla</li>
                <li>Pouet</li>
                <li>Blabla</li>
                <li>Pouet</li>
                <li>Blabla</li>
                <li>Pouet</li>
            </ul>`,
            thumbnail: "compassPortfolio.gif",
            repo: false,
            link: "https://www.meta.com/fr-ca/experiences/compass/7364112793688009/",
            firstLinkText: "Meta Quest Store"
        },
        {
            name: "Circle the Drain",
            description: "Short horror game about the rise and fall of a pop icon.",
            thumbnail: false,
            videoThumbnail: "thumbnails/circleTheDrainPortfolio.webm",
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
        
        console.log(item.thumbnail);
        
        if(!item.thumbnail)
        {
            console.log("Video");
            root.querySelector(".thumbnail").remove();
            root.querySelector(".videoThumbnail").src = item.videoThumbnail;
        }
        else
        {
            root.querySelector(".videoThumbnail").remove();
            root.querySelector(".thumbnail").src = "thumbnails/" + item.thumbnail;
        }
        
        root.querySelector(".tryIt").href = item.link;
        
        if(item.firstLinkText)
        {
            root.querySelector(".tryIt").innerHTML = item.firstLinkText;
        }
        
        if(!item.repo)
        {
            root.querySelector(".github").remove();
        }
        else if(item.repo.includes("https://")){
            root.querySelector(".github").href = item.repo;
        } else {
            root.querySelector(".github").href = "https://github.com/Raphaell-Maiwen/"+item.repo;
        }
        
        document.querySelector(".selectedProjects").appendChild(root);
    })
}


























