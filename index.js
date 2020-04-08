revealImage = (id) => {
    let img = document.getElementById(id);
    img.style.opacity = 0.5;
}

removeImage = (id) => {
    let img = document.getElementById(id);
    img.style.opacity = 0;
}


// Animation

window.onload = () => {
    console.log("loaded");
    const fcard1 = document.getElementById("vocabyCard");
    const fcard2 = document.getElementById("refugeeCard");
    const fcard3 = document.getElementById("earthCard");
    const indicator = document.getElementById("bottom");
    const featureHeader = document.getElementById("feature-header");
    const timelineHeader = document.getElementById("project-timeline");

    // Quick Implementation -- Fix later
    const card10 = document.getElementById("card10");
    const card9 = document.getElementById("card9");
    const card8 = document.getElementById("card8");
    const card7 = document.getElementById("card7");
    const card6 = document.getElementById("card6");
    const card5 = document.getElementById("card5");
    const card4 = document.getElementById("card4");
    const card3 = document.getElementById("card3");
    const card2 = document.getElementById("card2");
    const card1 = document.getElementById("card1");

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
            fcard1.style.opacity = 1;
            fcard1.style.margin = 0;
        }
    
        if(window.scrollY > 700) { 
            fcard2.style.opacity = 1;
            fcard2.style.margin = 0;
        }
    
        if(window.scrollY > 800) { 
            fcard3.style.opacity = 1;
            fcard3.style.margin = 0;
        }

        if(window.scrollY > 1100) { 
            timelineHeader.style.opacity = 1;
        }

        if(window.scrollY < 1100) {
            timelineHeader.style.opacity = 0;
        }

        if(window.scrollY > 1500) { 
            card10.style.opacity = 1;
        }

        if(window.scrollY > 1700) { 
            card9.style.opacity = 1;
        }

        if(window.scrollY > 2300) { 
            card8.style.opacity = 1;
        }

        if(window.scrollY > 2400) { 
            card7.style.opacity = 1;
        }

        if(window.scrollY > 2700) { 
            card6.style.opacity = 1;
        }

        if(window.scrollY > 2900) { 
            card5.style.opacity = 1;
        }

        if(window.scrollY > 3400) { 
            card4.style.opacity = 1;
        }

        if(window.scrollY > 3600) { 
            card3.style.opacity = 1;
        }

        if(window.scrollY > 3700) { 
            card2.style.opacity = 1;
        }

        if(window.scrollY > 3800) { 
            card1.style.opacity = 1;
        }

    }, false);
}