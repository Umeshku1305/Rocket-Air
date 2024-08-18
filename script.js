const videoElement = document.querySelector('video');

document.addEventListener('mousemove', function (event) {
    const x = event.clientX;
    const y = event.clientY;



    const videoTop = videoElement.getBoundingClientRect().top;
    const videoBottom = videoElement.getBoundingClientRect().bottom;

    if (videoTop < y && videoBottom > y) {
        document.documentElement.style.setProperty('--scale', 1);
    }
    else {
        document.documentElement.style.setProperty('--scale', 0);
    }
    document.documentElement.style.setProperty('--x-coord', x + 'px');
    document.documentElement.style.setProperty('--y-coord', y + 'px');
})

document.addEventListener("wheel", (event) => {
    const videoTop = videoElement.getBoundingClientRect().top;
    const videoBottom = videoElement.getBoundingClientRect().bottom;
    const tempY = document.documentElement.style.getPropertyValue('--y-coord');

    const y = parseInt(tempY.substring(0, tempY.length - 2));

    if (videoTop < y && videoBottom > y) {
        document.documentElement.style.setProperty('--scale', 1);
    }
    else {
        document.documentElement.style.setProperty('--scale', 0);
    }

})


var tl = gsap.timeline();
tl
.from(".page1 #nav ",{
    y:-150,
    opacity:"0",
    delay:0.8,
    duration:0.8
})


// var head  = document.querySelectorAll(".page1 h1")

// head.forEach(function(elem){
//     var data = elem.textContent;
//     var spliteddata  = data.split("");
//     var clutter  = "";
//    spliteddata.forEach(function(e){
//      clutter  += `<span>${e}</span>`;
//    });
//    elem.innerHTML = clutter;
// });


// tl.to(".page1 h1",{
//     color:"#E3E3C4",
//     stagger:0.2,
//     y:-390,
//         scale:.2,
//         opacity:0,
//         duration:1,
//         ease: Power4.easeOut,
//         delay:-0.5,
//         stagger:.2,
//         scrub:true,
//     scrollTrigger:{
//         scroller:"body",
//         trigger:".page1",
//         scrub:true,
//         y:-360,
//         markers:true,    
//         start:"top 100%",
//         end:"top -41%"
//     }
// })



tl.from(".page1 h1",{
    // y:-390,
    y:29,
    scale:.2,
    opacity:0,
    duration:.5,
    ease: Power4.easeOut,
    delay:-0.5,
    stagger:.2,
    scrub:true,
    scrollTrigger:{
        scroller:"body",
        markers:true,
        start:"top 100%",
        end:"top 70%"
    }
})



var head  = document.querySelectorAll("#page4 h1")

head.forEach(function(elem){
    var data = elem.textContent;
    var spliteddata  = data.split("");
    var clutter  = "";
   spliteddata.forEach(function(e){
     clutter  += `<span>${e}</span>`;
   });
   elem.innerHTML = clutter;
});


gsap.to("#page4 h1 span",{
    color:"blue",
    // stagger:2,
    // opacity:0,
    duration:9,
    x:-1229,
    // scale:.2,
    // opacity:0,
    // duration:.5,
    ease: Power4.easeOut,
    // delay:-0.5,
    stagger:.2,
    scrub:true,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page4 ",
        scrub:3,
        // markers:true,
        start:"top 40%",
        end:"top 10%",
    }
})


var head  = document.querySelectorAll("#page4 h2")

head.forEach(function(elem){
    var data = elem.textContent;
    var spliteddata  = data.split("");
    var clutter  = "";
   spliteddata.forEach(function(e){
     clutter  += `<span>${e}</span>`;
   });
   elem.innerHTML = clutter;
});


tl.to("#page4 h2 span",{
    duration:16,
    color:"blue",
    y:29,
    scale:.2,
    // opacity:0,
    ease: Power4.easeOut,
    delay:-0.5,
    stagger:.6,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page4 ",
        scrub:4,
        // markers:true,
        start:"top 5%",
        end:"top 90%"
    }
})




var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

