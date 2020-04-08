console.log("hello");

revealImage = (id) => {
    let img = document.getElementById(id);
    img.style.opacity = 0.5;
}

removeImage = (id) => {
    let img = document.getElementById(id);
    img.style.opacity = 0;
}