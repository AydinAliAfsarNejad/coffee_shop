

const toggleThemeBtn = document.querySelector("#toggle-theme");
toggleThemeBtn.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})

function removeItem(theme) {
    
}

removeItem("theme");


const toggleThemeBtn2 = document.querySelector("#toggle-theme2");
toggleThemeBtn2.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})

function removeItem2(theme) {

}

removeItem2("theme");