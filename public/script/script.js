// imports

// document
let $ = document
let loadElem = $.getElementById("loader");

// loader

window.addEventListener("load" , (event) => {
    loadElem.classList.add("hide")
    $.body.style = "block"
    console.log(event)
    
});

