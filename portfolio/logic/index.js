let timeline = gsap.timeline();
timeline.from(".logo" ,{
    opacity:0,
    y:-30,
    duration:0.5,
    ease:"linear"
})
timeline.from(".options" ,{
    opacity:0,
    x:30,
    duration:0.5,
    // onComplete:() => {
    //     console.log("Hello")
    // }
})
timeline.from(".option-1" ,{
    opacity:0,
    y:-30,
    duration:0.25,
    // paused:true
})
timeline.from(".option-2" ,{
    opacity:0,
    y:-30,
    duration:0.25,
})
timeline.from(".option-3" ,{
    opacity:0,
    y:-30,
    duration:0.25,
})
timeline.from(".option-4" ,{
    opacity:0,
    y:-30,
    duration:0.25,
});

timeline.to(".box-1", {
    x: 400,
    duration: 1,
});
timeline.to(".box-2", {
    x: 400,
    backgroundColor:"yellow",
    duration: 1,
});
timeline.to(".box-3", {
    x: 400,
    borderRadius:"50%",
    duration: 1,
});