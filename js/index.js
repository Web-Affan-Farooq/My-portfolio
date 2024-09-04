setTimeout(() => {
    document.querySelector(".container").style.display = "none";
    let popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `<p>Hello user , this website is a static template created by Muhammad Affan. If you want this template to be customized for you , reach out Muhammmad Affan via linked in, source code freely available on github. Click to copy link.
        Consider to star the repository </p>
        <p>Build with ♥ by Muhammad affan</p>
        <p>Want to exit? click on me</p>`;
    console.log(popup);
    document.body.appendChild(popup);
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.querySelector(".popup").addEventListener('click', function exit() {
        document.body.removeChild(popup);
        console.log("notification removed");
        document.querySelector(".container").style.display = "block";
        document.body.style.display = "block";
        window.navigator.clipboard.writeText("hello world");
    })
    setTimeout(() => {
        document.body.removeChild(popup);
        console.log("notification removed");
        document.querySelector(".container").style.display = "block";
        document.body.style.display = "block";
    }, 20000);
}, 5000);



let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let intersecting = entry.isIntersecting;
        if (intersecting) {
            entry.target.style.opacity = 1;
        } else if (!intersecting) {
            entry.target.style.opacity = 0;
        }
    })
}, { threshold: [0.25] });

let section_1 = document.querySelector(".section-1");
let section_2 = document.querySelector(".section-2");
let section_3 = document.querySelector(".section-3");
let section_4 = document.querySelector(".section-4");
let section_5 = document.querySelector(".section-5");
let section_6 = document.querySelector(".section-6");
let footer = document.querySelector("footer");
let sections = [ section_1, section_2, section_3, section_4, section_6, footer];
console.log(sections);

sections.forEach(section => {
    observer.observe(section);
});

