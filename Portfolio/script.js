const init = ()=>{
    const itemTemplate = document.getElementById("item").content; 

    const items = [{
            name: "Compass",
            description: `An ambitious open-world VR game.
            <br>Tasks / Responsibilities:
            <ul>
                <li>Gameplay features (including but not limited to: garage to customize ship, platforming obstacles, dynamic dialogue boxes, quest system)</li>
                <li>Data persistence: making sure the game state stays consistent when saving / loading a save file, and when loading / unloading game zones as the player travel the world.</li>
                <li>Tooling (teleport points, color blindness simulator, on-screen debug metrics)</li>
                <li>Optimization (LOD Groups, LOD generator, origin shifting)</li>
                <li>UI (UI Toolkit, <a href = "https://discussions.unity.com/t/introducing-the-vector-api-in-unity-2022-1/864911">Vector API)</a></li>
                <li><a href = "https://www.articy.com/en/">Articy integration</a> (a narrative design tool)</li>
            </ul>`,
            thumbnail: false,
            videoThumbnail: "thumbnails/compassPortfolio.webm",
            repo: false,
            link: "https://www.meta.com/fr-ca/experiences/compass/7364112793688009/",
            firstLinkText: "Meta Quest Store"
        },
        {
            name: "Circle the Drain",
            description: `Short horror game about the rise and fall of a pop icon.
            <br>Solo project. Did all the programming, including:
            <ul>
                <li>Systems Programming (Contextual actions + UI, Audio Manager, level progression and initialization, barebone dialogue system)</li>
                <li>VFX Graph</li>
                <li>Cinemachine cameras</li>
                <li>UI (uGUI)</li>
            </ul>`,
            thumbnail: false,
            videoThumbnail: "thumbnails/circleTheDrainPortfolio.webm",
            repo: "Circle-the-Drain",
        },
        {
            name: "Guitar Ego",
            description: `Competitive rhythm game where players have to improvise solos.
            <br>Solo project. Did all the programming, including:
            <ul>
                <li>Metronome / music functions</li>
                <li>Varied game states</li>
                <li>Using Windows API to read raw input (read two keyboards as separate devices rather than one)</li>
                <li>Games customization</li>
                <li>UI (uGUI)</li>
            </ul>`,
            thumbnail: "guitarEgo.png",
            repo: "SimpleRhythmGame"
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
        
        if(item.link)
        {
            root.querySelector(".tryIt").href = item.link;
        }
        else
        {
            root.querySelector(".tryIt").remove();
        }
        
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