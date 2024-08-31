let navToogle = document.querySelector("#menu-icon");
let nav = document.querySelector(".navbar");

let flag = 0;
navToogle.addEventListener('click',function showNav() {
    if(flag === 0) {
        document.querySelector("header").style.height = "60%";
        document.querySelector(".nav-list").style.display = "flex";
        document.querySelector("#menu-icon").innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        flag = 1;
    }
    else {
        document.querySelector("#menu-icon").innerHTML = `<i class="fa-solid fa-bars"></i>`;
        document.querySelector(".nav-list").style.display = "none";
        document.querySelector("header").style.height = "60px";
        flag = 0;
    }
})

if(window.innerWidth <=750) {    
    let navOptions = document.querySelectorAll(".nav-options");
    navOptions.forEach(option => {
        option.addEventListener("click", function hideNav(e) {
            document.querySelector("#menu-icon").innerHTML = `<i class="fa-solid fa-bars"></i>`;
            document.querySelector(".nav-list").style.display = "none";
            document.querySelector("header").style.height = "60px";
        })
    })
}
