// gsap.to(".box-1", {
//     rotate:360,
//     duration:3,
//     scrollTrigger:".box-1"
// })
// gsap.from(".box-2", {
//     x:-400,
//     opacity:0,
//     duration:1,
//     scrollTrigger: {
//         trigger:".box-2", //____contains name of element to be animated
//         scroller:"body", // ____elment Which is to be scrolled
//         markers:true,  // ____show markers for indicating animation state
//         start:"top 60%", // trigger point
//         scrub:1.5, // ___allow animation to run when scrolling
//         pin:true, // ____ Stick the animation to a point
//     }
// });


// gsap.to(".box-3", {
//     rotate:360,
//     duration:3,
//     scrollTrigger:".box-3"
// })

gsap.from(".bg-heading", {
    opacity:0,
    y:50,
    duration:1,
    scrollTrigger: {
        scroller:"body",
        trigger:".bg-heading",
        marker:true,
        scrub:1.5,
        end:"top 60%"
    }
});
gsap.from(".para", {
    x:-500,
    duration:0.2,
    scrollTrigger: {
        scroller:"body",
        trigger:".para",
        marker:true,
        scrub:1.5,
    }
});

gsap.to(".cont-4", {
    transform:"translateX(100%)",
    scrollTrigger: {
        trigger:".cont-4",
        markers:true,
        scrub:true,
        start:"top 100%",
    }
})