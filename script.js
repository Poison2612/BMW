var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var h4all = document.querySelectorAll("#nav h4");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px",
  crsr.style.top = dets.y + "px",
  blur.style.left = dets.x - 250 + "px",
  blur.style.top = dets.y - 250 + "px"
});

h4all.forEach(function(elem){
   elem.addEventListener("mouseenter", function(){
      crsr.style.scale = 3,
      crsr.style.backgroundColor = "rgb(1,1,1,0)"
      crsr.style.border = "1px solid #fff"
   });
   elem.addEventListener("mouseleave", function(){
      crsr.style.scale = 1,
      crsr.style.backgroundColor = "#0166B1"
      crsr.style.border = "0px solid #0166B1"
   });

});


gsap.to("#nav", {
   backgroundColor:"rgb(0,0,0,1)",
   height:"90px",
   duration:0.5,
   scrollTrigger: {
    trigger:"#nav",
    scroller: "body",
    // markers: "true",
    start: "top -10%",
    end: "top -11%",
    scrub:1
   }
});

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger: {
     trigger:"#main",
     scroller: "body",
    //  markers: "true",
     start: "top -25%",
     end: "top -80%",
     scrub:2
    }
 });


 gsap.from("#about-us img,#about-us-in", {
   y: 90,
   opacity: 0,
   duration: 1,
   scrollTrigger: {
     trigger: "#about-us",
     scroller: "body",
     // markers:true,
     start: "top 70%",
     end: "top 65%",
     scrub: 3,
   },
 });

//  gsap.from(".card", {
//    scale: 0.8,
//    duration: 1,
//    stagger:0.1,
//    scrollTrigger: {
//       trigger: ".card",
//       scroller: "body",
//       start: "top 75%",
//       end: "top 65%",
//       scrub:1,
//    },
   
//  });

 gsap.from("#left-colon", {
   y: -70,
   x: -70,
   duration: 1,
   scrollTrigger: {
     trigger: "#left-colon",
     scroller: "body",
     // markers:true,
     start: "top 55%",
     end: "top 45%",
     scrub: 4,
   },
 });

 gsap.from("#right-colon", {
   y: 70,
   x: 70,
   duration: 1,
   scrollTrigger: {
     trigger: "#left-colon",
     scroller: "body",
     // markers:true,
     start: "top 55%",
     end: "top 45%",
     scrub: 4,
   },
 });





 
