"use strict";

(function() {
    window.addEventListener('load', init);

    function init() {
        console.log('loaded');

        const fcard1 = document.getElementById('vocabyCard');
        const fcard2 = document.getElementById('uwlCard');
        const fcard3 = document.getElementById('earthCard');
        const fcard4 = document.getElementById('visionCard');
        const indicator = document.getElementById('bottom');
        const featureHeader = document.getElementById('feature-header');
        const timelineHeader = document.getElementById('project-timeline');

        const projects19 = document.querySelectorAll('#nineteen > div');
        const projects20 = document.querySelectorAll('#twenty > div');
    
        window.addEventListener('scroll', () => {
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

            if(window.scrollY > 800) { 
                fcard4.classList.add('fpVisible');
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
    
            if(!projects20[0].classList.contains('visible') && window.scrollY > 1300) { 
                makeVisible(projects20);
            }
    
            if(!projects19[0].classList.contains('visible') && window.scrollY > 2600) { 
                makeVisible(projects19);
            }
        }, false);
    }
})();

function makeVisible(arr) {
    arr.forEach(element => {
        element.classList.add('visible');
    });
}

function revealImage(id) {
    let img = document.getElementById(id);
    img.style.opacity = 0.5;
}

function removeImage(id) {
    let img = document.getElementById(id);
    img.style.opacity = 0;
}