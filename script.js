let menu = document.querySelector(".menub");
let menuCircle = document.querySelector(".menu-circle");
let searchIcon = document.querySelector(".searchIcon");
let menuLinks = document.querySelector(".menuLinks");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let products = document.querySelector(".products");
let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let hero = document.querySelector(".hero");
let heroImage = document.querySelector(".hero-image");

   
function scrollSet() {
  let prevScrollPos = window.pageYOffset;
  let navbar = document.querySelector(".nav");

  if(window.innerWidth >= 768){
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "50px";
      } else if(prevScrollPos < currentScrollPos) {
        navbar.style.top = "-50px";
      }
      prevScrollPos = currentScrollPos;
    };
  }
}

function navbarFunction(){
  
  let a = true;
  menu.addEventListener("click", () => {
    if (a) {
      menu.innerHTML = "<i class='ri-close-large-line'></i>";
      // menuCircle.style.display = "fixed";
      gsap.to(menuCircle, {
        scale: 50,
        ease: Power4,
      });
      gsap.to(".center", {
        scale:1.3,
        y: 50,
        ease: "expo.out",
        delay: 0.3,
        onStart:function(){
          menuLinks.style.display = "flex";
          gsap.from(".link h1",{
            y:-150,
            stagger:0.1
          })
          gsap.from(".link1 h1",{
            y:-150,
            stagger:0.1
          })
        }
      });
      searchIcon.style.opacity = "0";
      left.style.display = "none";
      right.style.display = "none";
      a=false;
    } else {
      // console.log(window.innerWidth);
      menu.innerHTML = "<i class='ri-menu-5-line'></i>";
      menuLinks.style.display = "none";
      gsap.to(menuCircle, {
        scale: .01,
        ease: Power4,
      });
      gsap.to(".center", {
        scale:1,
        y: 0,
        ease: "expo.out",
        delay: 0.1,
        onStart:function(){
          searchIcon.style.opacity = "1";
          if(window.innerWidth > 768){
            left.style.display = "flex";
            right.style.display = "flex";
          }else{
            left.style.display = "none";
            right.style.display = "none";
          }
        }
      });
      
      a=true;
    }
  });

}

function homeAnimateFunction(){
  let tl2 = gsap.timeline();

  tl2.from(".line h1",{
      y:150,
      // delay:.8,
      stagger:0.4,
      ease: "back.out(1.7)",
  })

  let taste = document.querySelector(".taste");
  let text = taste.innerText.split('');
  taste.innerHTML = '';
  text.forEach((e) => {
      
      let span;
      span = document.createElement('span');
      span.textContent = e;
      taste.appendChild(span);
      gsap.set(span, { opacity: 0, y: 20 });

      tl2.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.14,
          ease: 'power3.out'
      });
  });

  // tl2.from(".nav",{
  //     y: -130
  // })
  gsap.from(".image1",{
    x:300,
    delay:4,
    rotate:45,
    duration:.5
  })
  gsap.from(".image2",{
    x:-300,
    delay:4,
    rotate:-45,
    duration:.5
  })
  if(window.innerWidth >= 470){
    hero.style.fontSize = "8.5vw";
    heroImage.style.width = "60vw"
    heroImage.style.bottom = "-2.5rem"
  }
  if(window.innerWidth >= 816){
    heroImage.style.width = "50vw";
  }

  gsap.to(".line h1",{
    opacity:0,
    scrollTrigger:{
      trigger:".line h1",
      scroller:"body",
      // markers:true,
      start:"top 10%",
      end:"top -40%",
      scrub:true
    }
  })
  gsap.to(".image1 img",{
    right:"-20rem",
    rotate:45,
    scrollTrigger:{
      trigger:".image1",
      scroller:"body",
      // markers:true,
      start:"top 20%",
      end:"top -30%",
      scrub:true
    }
  })
  gsap.to(".image1",{
    right:"-20rem",
    // rotate:50,
    scrollTrigger:{
      trigger:".image1",
      scroller:"body",
      // markers:true,
      start:"top 20%",
      end:"top -30%",
      scrub:true
    }
  })
  gsap.to(".image2 img",{
    left:"-20rem",
    rotate:-45,
    scrollTrigger:{
      trigger:".image1",
      scroller:"body",
      // markers:true,
      start:"top 20%",
      end:"top -30%",
      scrub:true
    }
  })
  gsap.to(".image2",{
    left:"-20rem",
    // rotate:50,
    scrollTrigger:{
      trigger:".image1",
      scroller:"body",
      // markers:true,
      start:"top 20%",
      end:"top -30%",
      scrub:true
    }
  })

  
}

function productFunction(){
  document.querySelector(".img1").addEventListener("mouseenter",()=>{
    gsap.to(".img1",{
      width:"52%"
    });
    gsap.to(".img1-back",{
      scale:"1"
    });
    gsap.to(".img-div1",{
      scale:1.05
    })
  })
  document.querySelector(".img1").addEventListener("mouseleave",()=>{
    gsap.to(".img1",{
      width:"50%"
    });
    gsap.to(".img1-back",{
      scale:"0"
    });
    gsap.to(".img-div1",{
      scale:1
    })
  })
  
  
  document.querySelector(".img2").addEventListener("mouseenter",()=>{
    gsap.to(".img2",{
      width:"42%"
    });
    gsap.to(".img2-back",{
      scale:"1"
    });
    gsap.to(".img-div2",{
      scale:1.05
    })
  })
  document.querySelector(".img2").addEventListener("mouseleave",()=>{
    gsap.to(".img2",{
      width:"40%"
    });
    gsap.to(".img2-back",{
      scale:"0"
    });
    gsap.to(".img-div2",{
      scale:1
    })
  })
  
  
  document.querySelector(".img3").addEventListener("mouseenter",()=>{
    gsap.to(".img3",{
      width:"37%"
    });
    gsap.to(".img3-back",{
      scale:".9"
    });
    gsap.to(".img-div3",{
      scale:1.05
    })
  })
  document.querySelector(".img3").addEventListener("mouseleave",()=>{
    gsap.to(".img3",{
      width:"35%"
    });
    gsap.to(".img3-back",{
      scale:"0"
    });
    gsap.to(".img-div3",{
      scale:1
    })
  })
  
  
  document.querySelector(".img4").addEventListener("mouseenter",()=>{
    gsap.to(".img4",{
      width:"62%"
    });
    gsap.to(".img4-back",{
      scale:"1.1"
    });
    gsap.to(".img-div4",{
      scale:1.05
    })
  })
  document.querySelector(".img4").addEventListener("mouseleave",()=>{
    gsap.to(".img4",{
      width:"60%"
    });
    gsap.to(".img4-back",{
      scale:"0"
    });
    gsap.to(".img-div4",{
      scale:1
    })
  })


  document.querySelector(".img5").addEventListener("mouseenter",()=>{
    gsap.to(".img5",{
      width:"57%"
    });
    gsap.to(".img5-back",{
      scale:"1.1"
    });
    gsap.to(".img-div5",{
      scale:1.05
    })
  })
  document.querySelector(".img5").addEventListener("mouseleave",()=>{
    gsap.to(".img5",{
      width:"55%"
    });
    gsap.to(".img5-back",{
      scale:"0"
    });
    gsap.to(".img-div5",{
      scale:1
    })
  })

  document.querySelector(".img6").addEventListener("mouseenter",()=>{
    gsap.to(".img6",{
      width:"57%"
    });
    gsap.to(".img6-back",{
      scale:"1.1"
    });
    gsap.to(".img-div6",{
      scale:1.05
    })
  })


  document.querySelector(".img6").addEventListener("mouseleave",()=>{
    gsap.to(".img6",{
      width:"55%"
    });
    gsap.to(".img6-back",{
      scale:"0"
    });
    gsap.to(".img-div6",{
      scale:1
    })
  })


  document.querySelector(".img7").addEventListener("mouseenter",()=>{
    gsap.to(".img7",{
      width:"72%"
    });
    gsap.to(".img7-back",{
      scale:"1.1"
    });
    gsap.to(".img-div7",{
      scale:1.05
    })
  })
  document.querySelector(".img7").addEventListener("mouseleave",()=>{
    gsap.to(".img7",{
      width:"70%"
    });
    gsap.to(".img7-back",{
      scale:"0"
    });
    gsap.to(".img-div7",{
      scale:1
    })
  })


  document.querySelector(".img8").addEventListener("mouseenter",()=>{
    gsap.to(".img8",{
      width:"42%"
    });
    gsap.to(".img8-back",{
      scale:"1"
    });
    gsap.to(".img-div8",{
      scale:1.05
    })
  })
  document.querySelector(".img8").addEventListener("mouseleave",()=>{
    gsap.to(".img8",{
      width:"40%"
    });
    gsap.to(".img8-back",{
      scale:"0"
    });
    gsap.to(".img-div8",{
      scale:1
    })
  })
}

function productMoves(){
  
  let count = 0;
  leftArrow.addEventListener("click",()=>{
    
    if(window.innerWidth >= "1450"){
      if(count<=63){
        count +=21;
        gsap.to(products,{
          right:`${count}rem`
        })
      }
    }

    else if(window.innerWidth >= "1127" && window.innerWidth <= "1450"){
      if(count<=84){
        count +=21;
        gsap.to(products,{
          right:`${count}rem`
        })
      }
    }

    else if(window.innerWidth >= "772" && window.innerWidth <= "1127"){
      if(count<=105){
        count +=21;
        gsap.to(products,{
          right:`${count}rem`
        })
      }
    }

    else if(window.innerWidth >= "361" && window.innerWidth <= "772"){
      if(count<=126){
        count +=21;
        gsap.to(products,{
          right:`${count}rem`
        })
      }
    }

    else if(window.innerWidth <= "361"){
      if(count<=147){
        count +=21;
        gsap.to(products,{
          right:`${count}rem`
        })
      }
    }
  });


  rightArrow.addEventListener("click",()=>{
    
    if(count>=21){
      count -=21;
      gsap.to(products,{
        right:`${count}rem`
      })
    }
  })

}

function textAnimate(){
  let clutter = "";
  document.querySelector(".celeb-text").textContent.split("").forEach(function(e){
    if(e===""){
        clutter += `<span>&nbsp;</span>`
    }
    clutter += `<span>${e}</span>`;
  })
  document.querySelector(".celeb-text").innerHTML = clutter;

  gsap.set(".celeb-text span",{opacity:.05})

  gsap.to(".celeb-text span",{
    opacity: 1,
    stagger: .03,
    ease: Power4,
    scrollTrigger:{
        trigger:".celeb-text span",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
        scrub:2
    }
  });

  gsap.from(".back-to-1946",{
    x:-500,
    scrollTrigger:{
      trigger:".back-to-1946",
      scroller:"body",
      // markers:true,
      start:"top 80%",
      end:"bottom 60%",
      scrub:2
    }
  });
  // gsap.from(".h-upper h1",

  gsap.from(".h-upper h1",{
    opacity:1,
    scrollTrigger:{
      trigger:".back-to-1946",
      scroller:"body",
      // markers:true,
      start:"top 80%",
      end:"bottom 60%",
      scrub:true
    }
  })

  let clutter1 = "";
  document.querySelector(".h-upper h1").textContent.split("").forEach(function(e){
    if(e===""){
        clutter1 += `<span>&nbsp;</span>`
    }
    clutter1 += `<span>${e}</span>`;
  })
  document.querySelector(".h-upper h1").innerHTML = clutter1;

  gsap.set(".h-upper span",{opacity:.05})

  gsap.to(".h-upper span",{
    opacity: 1,
    stagger: .03,
    ease: Power4,
    scrollTrigger:{
        trigger:".h-upper span",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 60%",
        scrub:2
    }
  });

  gsap.to(".middle h1",{
    opacity: 1,
    ease: Power4,
    scrollTrigger:{
        trigger:".middle h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 60%",
        scrub:2
    }
  });
  


}

function colorChanging(){
  document.querySelectorAll(".section")
  .forEach(function(e){
    ScrollTrigger.create({
      trigger:e,
      start:"top 50%",
      end:"bottom 50%",
      // markers:true,
      onEnter:function(){
        document.body.setAttribute("theme",e.dataset.color);
      },
      onEnterBack:function(){
        document.body.setAttribute("theme",e.dataset.color);
      }
    })
  });


  

}

function loco(){
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function page5Animation(){
  gsap.from(".page5-h1-1",{
    x:1300,
    scrollTrigger:{
      trigger:".page5-h1-1",
      scroller:"body",
      start:"top 80%",
      end:"bottom 70%",
      scrub:2
    }
  });

  gsap.from(".page5-h1-2",{
    x:-1300,
    
    scrollTrigger:{
      trigger:".page5-h1-1",
      scroller:"body",
      start:"top 80%",
      end:"bottom 70%",
      scrub:2
    }
  });

  gsap.to(".page5-1 h1",{
    opacity:0,
    scrollTrigger:{
      trigger:".news-section",
      scroller:"body",
      // markers:true,
      start:"top -10%",
      end:"bottom 50%",
      scrub:2
    }
  });

  gsap.to(".news-section",{
    right:"0",
    scrollTrigger:{
      trigger:".news-section",
      scroller:"body",
      // markers:true,
      start:"top -50%",
      end:"bottom -100%",
      scrub:1,

    }
  })

}

scrollSet();
navbarFunction();
homeAnimateFunction();
productFunction();
productMoves();
textAnimate();
colorChanging();
loco();
page5Animation();