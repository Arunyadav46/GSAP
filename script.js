 var tl = gsap.timeline();
tl.from("#nav h4",{
   y:-60,
   duration:0.5,
   stagger:0.1
})

tl.from("#center h1",{
//    x: -1270,
   opacity:0,
   duration:1,
   stagger:0.5
})
tl.from("img",{
    x:100,
    duration:1,
    opacity:0,
    rotate:45,
    stagger:0.1
})





