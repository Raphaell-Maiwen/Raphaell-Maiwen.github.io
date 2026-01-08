const init = ()=>{
    const itemTemplate = document.getElementById("item").content; 

    const items = [{
            name: "Wet What What",
            description: "A game about the music industry weird censorship practices.",
            thumbnail: "wetWhatWhat.jpg",
            repo: "WetWhatWhat",
            link: "https://rafiki.itch.io/wet-what-what"
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
