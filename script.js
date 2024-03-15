var tl= gsap.timeline()

tl.from("#nav h2",{
    y:-50,
    delay:0.3,
    duration:1,
    opacity:0,
    stagger:0.3
})

tl.from("#main h1",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:0.4
})

tl.from("img",{
    scale:0,
    opacity:0,
    stagger:0.4,
    rotate:360  
})

tl.from("#nav3, h3, p, h4",{
    y:20,
    delay:0.3,
    duration:1,
    opacity:0,
    stagger:0.3
})