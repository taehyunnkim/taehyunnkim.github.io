window.onload = () => {
    console.log("loaded");
    const card1 = document.getElementById("vocabyCard");
    const card2 = document.getElementById("refugeeCard");
    const card3 = document.getElementById("earthCard");
    const indicator = document.getElementById("bottom");
    const featureHeader = document.getElementById("feature-header");

    window.addEventListener('scroll', () => {
        console.log(window.pageYOffset);
    
        if(window.scrollY > 50) {
            indicator.style.opacity = 0;
        }
    
        if(window.scrollY < 50) {
            indicator.style.opacity = 1;
        }
    
        if(window.scrollY > 300) {
            featureHeader.style.opacity = 1;
        }
    
        if(window.scrollY < 300) {
            featureHeader.style.opacity = 0;
        }
    
        if(window.scrollY > 600) { 
            card1.style.opacity = 1;
            card1.style.margin = 0;
        }

        if(window.scrollY < 600) { 
            card1.style.opacity = 0;
            card1.style.marginRight = '200px';
        }
    
        if(window.scrollY > 700) { 
            card2.style.opacity = 1;
            card2.style.margin = 0;
        }

        if(window.scrollY < 700) { 
            card2.style.opacity = 0;
            card2.style.marginLeft = '200px';
        }
    
        if(window.scrollY > 800) { 
            card3.style.opacity = 1;
            card3.style.margin = 0;
        }

        if(window.scrollY < 800) { 
            card3.style.opacity = 0;
            card3.style.marginRight = '200px';
        }

    }, false);
}

revealImage = (id) => {
    let img = document.getElementById(id);
    img.style.opacity = 0.5;
}

removeImage = (id) => {
    let img = document.getElementById(id);
    img.style.opacity = 0;
}