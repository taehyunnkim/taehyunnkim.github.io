"use strict";

(function() {
    window.addEventListener('load', init);

    function init() {
        console.log("loaded");

        const fcard1 = document.getElementById("vocabyCard");
        const fcard2 = document.getElementById("visionCard");
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
        const card0 = document.getElementById("card0");
    
        window.addEventListener('scroll', () => {
            console.log(window.pageYOffset);
        
            if(window.scrollY > 50) {
                indicator.style.opacity = 0;
            }
        
            if(window.scrollY < 50) {
                indicator.style.opacity = 1;
            }
        
            if(window.scrollY > 300 && window.scrollY < 1100) {
                featureHeader.classList.add('visible');
            }

            if(window.scrollY > 1100) { 
                featureHeader.classList.remove('visible');
            }
        
            if(window.scrollY < 300) {
                featureHeader.classList.remove('visible');
            }
        
            if(window.scrollY > 500) { 
                fcard1.classList.add('fpVisible');
            }
        
            if(window.scrollY > 600) { 
                fcard2.classList.add('fpVisible');
            }
        
            if(window.scrollY > 700) { 
                fcard3.classList.add('fpVisible');
            }
    
            if(window.scrollY > 900 && window.scrollY < 2000) { 
                timelineHeader.classList.add('visible');
            }

            if(window.scrollY > 2000) { 
                timelineHeader.classList.remove('visible');
            }
    
            if(window.scrollY < 850) {
                timelineHeader.classList.remove('visible');
            }
    
            if(window.scrollY > 1300) { 
                card10.classList.add('visible');
                card9.classList.add('visible');
                card8.classList.add('visible');
            }
    
            if(window.scrollY > 2200) { 
                card7.classList.add('visible');
                card6.classList.add('visible');
                card5.classList.add('visible');
                card4.classList.add('visible');
            }
        }, false);
    }
})();

function revealImage(id) {
    let img = document.getElementById(id);
    img.style.opacity = 0.5;
}

function removeImage(id) {
    let img = document.getElementById(id);
    img.style.opacity = 0;
}