var crsr= document.querySelector("#cursor")
var blurr= document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+30+"px"
  crsr.style.top = dets.y+"px"
  blurr.style.left = dets.x-200+"px"
  blurr.style.top = dets.y-200+"px"
})


gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        marker:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to("#main",{
backgroundColor:"black",
scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    marker:true,
    start:"top -25%",
    end:"top -80%",
    scrub:2
}
}
)
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border= "0.1px solid white";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border= "0px solid white";
        crsr.style.backgroundColor="transparent";
    })
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "top 68%",
        scrub:3
    }
})

gsap.from("#card-container",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#card-container",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "top 58%",
        scrub:3
    }
})

gsap.from("#colon1",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#card-container",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "top 58%",
        scrub:3
    }
})

