// imports

// document
let $ = document
let shopItem = $.querySelector(".SubMenu")
let SubMenu = $.querySelector(".ShopItems")
let navIconOpenBtn = $.querySelector("#nav-icon-openBtn")
let mobileHeader = $.querySelector("#mobile-header")
let navMenuCloseBtn = $.querySelector("#nav-menu-closeBtn")
let mobileCart = $.querySelector("#mobile-cart")
let mobileCartMenu = $.querySelector("#mobile-cart-menu")
let closeCart = $.querySelector("#close-cart")
// scripts

// toggle shop items
shopItem.addEventListener("click", (hover) => {

    hover.currentTarget.parentElement.classList.toggle("text-orange-300" )
    hover.currentTarget.parentElement.classList.toggle("transition-all" )
    hover.currentTarget.parentElement.classList.toggle("duration-200ms" )

    SubMenu.classList.toggle("ShopItemOpen")
})

//open nav Menu
navIconOpenBtn.addEventListener("click", () => {

    mobileHeader.classList.remove("-right-64")
    mobileHeader.classList.add("right-0")
})

// close nav Menu
navMenuCloseBtn.addEventListener("click", () => {
    // console.log("close")

    mobileHeader.classList.remove("right-0")
    mobileHeader.classList.add("-right-64")
});

// open cart menu
mobileCart.addEventListener("click" , () => {

    mobileCartMenu.classList.remove("-left-64");
    mobileCartMenu.classList.add("left-0");
})


// close cart menu 
closeCart.addEventListener("click" , () => {

    mobileCartMenu.classList.remove("left-0");
    mobileCartMenu.classList.add("-left-64");
})
