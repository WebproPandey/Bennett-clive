function loco(){
    gsap.registerPlugin(ScrollTrigger);

    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".conatainers"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".conatainers", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".conatainers").style.transform ? "transform" : "fixed"
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    
}
loco()



var loadetl =  gsap.timeline()
loadetl.from(".loaderheading",{
  y:"-50%",
  opacity:0,
  duration:1,
  ease: "power5.inOut"
})
loadetl.from(".laoderslider",{
  y:"100%",
  opacity:0,
  duration:0.8,
  ease: "power5.inOut"
})
loadetl.to(".loaderbigheading",{
  fontSize: "2vw",
  duration: 1,
  ease: "power5.inOut"
},"load")
loadetl.to("#secondh1",{
  paddingRight:"-10vw",
  duration: 1,
  ease: "power5.inOut"
},"load")



loadetl.to(".loaderheading",{
  y:"-50%",
  display:"none",
  ease: "power5.inOut"
},"load")
loadetl.to(".laoderslider",{
  y:"100%",
  display:"none",
  ease: "power5.inOut"
},"load")

loadetl.to(".loader",{
 display:"none",
  duration: 1,
 ease: "power5.inOut"
})





loadetl.from(".uptext1 ", {
  fontSize: "0px",
  duration: 1,

  ease: "power5.inOut"
},"homeload");

loadetl.from(".downtext1, .downtext2 , .downtext3 , .downtext4 ,.downtext5", {
  fontSize: "9vw",
  duration: 1,
  ease: "power5.inOut"
},"homeload");

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#navbar1 h1", {
    color: "black", 
    duration: 1,
    ease: "power5.inOut",
    scrollTrigger: {
      trigger: ".secondpage",
      scroller: ".conatainers",
      start: "0% 60%", 
      end: "0%  0%", 
      scrub: 1,
    }
  });
  gsap.to(".menu", {
    color: "black", 
    duration: 1,
    ease: "power5.inOut",
    scrollTrigger: {
      trigger: ".secondpage",
      scroller: ".conatainers",
      start: "top 10%", // When the top of secondpage hits 60% of the viewport height
      end: "top 10%", // When the bottom of secondpage hits the top of the viewport
      scrub: 1,
    }
  });
});


function homepage(){
  
var tl = gsap.timeline();
tl.to(".video1", {
  y: "-100%",
  stagger: {
    each: 1
  },
  duration: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".homepage",
    scroller: ".conatainers",
    start: "0% top",
    end: "bottom top",
    scrub: 1,
    pin: true,
    
  }
}, "a");


var uptext = document.querySelectorAll(".uptext")
 

var tl =  gsap.timeline()
tl.to(".uptext1",{
  y:"-100%",
  duration:"0.7",
  ease:"none",
  scrollTrigger: {
    trigger: ".up",
    scroller: ".conatainers",
    start: "0% 0%",
    end: "100% 0%",
    scrub:2,
  }
});

tl.to(".uptext2",{
  fontSize: "10vw",
  duration:"0.7",
  lineHeight:"18vh",
  ease:"none",
  scrollTrigger: {
    trigger: ".up",
    scroller: ".conatainers",
    start: "5% 0%",
    end: "100% 0%",
    scrub:2,


  }
},"a")
tl.to(".uptext2",{
  y:"-100%",
  duration:"0.7",
  ease:"none",
  scrollTrigger: {
    trigger: ".up",
    scroller: ".conatainers",
    start: "100% 0%",
    end: "200% 0%",
    scrub:2,



  }
})
tl.to(".uptext3",{
  fontSize: "10vw",
  duration:"0.7",
  lineHeight:"18vh",
  ease:"none",
  scrollTrigger: {
    trigger: ".up",
    scroller: ".conatainers",
    start: "110% 0%",
    end: "190% 0%",
    scrub:2,

   
  }
},"b")
tl.to(".uptext3",{
  y:"-100%",
  duration:"0.7",
  ease:"none",
  scrollTrigger: {
    trigger: ".up",
    scroller: ".conatainers",
    start: "190% 0%",
    end: "300% 0%",
    scrub:2,



  }
})
tl.to(".uptext4",{
  fontSize: "10vw",
  duration:"0.7",
  lineHeight:"18vh",
  ease:"none",
  scrollTrigger: {
    trigger: ".up",
    scroller: ".conatainers",
    start: "190% 0%",
    end: "320% 0%",
    scrub:2,

  }
},"c")
tl.to(".uptext4",{
  y:"-100%",
  duration:"0.7",
  ease:"none",
  scrollTrigger: {
    trigger: ".up",
    scroller: ".conatainers",
    start: "325% 0%",
    end: "430% 0%",
    scrub:2,



  }
})
tl.to(".uptext5",{
  fontSize: "10vw",
  duration:"0.7",
  lineHeight:"18vh",
  ease:"none",
  scrollTrigger: {
    trigger: ".up",
    scroller: ".conatainers",
    start: "335% 0%",
    end: "450% 0%",
    scrub:2,


  } 

},"d")
tl.to(".uptext5",{
  y:"-100%",
  duration:"0.7",
  ease:"none",
  scrollTrigger: {
    trigger: ".up",
    scroller: ".conatainers",
    start: "450% 0%",
    end: "520% 0%",
    scrub:2,
  }
},"e")
tl.to(".uptext6",{
  fontSize: "10vw",
  duration:"0.7",
  lineHeight:"18vh",
  ease:"none",
  scrollTrigger: {
    trigger: ".up",
    scroller: ".conatainers",
    start: "440%  0%",
    end: "530% 0%",
    scrub:2,


  } 
})

tl.to(".downtext1",{
   fontSize:"0px",
   duration:"0.7",
   ease:"none",
   scrollTrigger: {
    trigger: ".down",
    scroller: ".conatainers",
    start:"5% 50%",
    end: "100% 45%",
    scrub:2,
  }
},"a")
tl.to(".downtext2",{
  fontSize:"0px",
  scrollTrigger: {
   trigger: ".down",
   scroller: ".conatainers",
   start:"100% 50%",
   end: "200% 45%",
   scrub:2,

 }
},"b")
tl.to(".downtext3",{
  fontSize:"0px",
  scrollTrigger: {
   trigger: ".down",
   scroller: ".conatainers",
   start:"200% 50%",
   end: "300% 45%",
   scrub:2,
 }
},"c")
tl.to(".downtext4",{
  fontSize:"0px",
  scrollTrigger: {
   trigger: ".down",
   scroller: ".conatainers",
   start:"300% 50%",
   end: "400% 45%",
   scrub:2,
 }
},"d")
tl.to(".downtext5",{
  fontSize:"0px",
  scrollTrigger: {
   trigger: ".down",
   scroller: ".conatainers",
   start:"400% 50%",
   end: "500% 45%",
   scrub:2,
 }
},"e")
tl.to(".down",{
  height:"0vh",
  scrollTrigger: {
   trigger: ".down",
   scroller: ".conatainers",
   start:"400% 50%",
   end: "500% 45%",
   scrub:2,
 }
},"e")




}

 homepage()
 gsap.to(".secondedown h1", {
  y: (i, target) => -window.innerHeight * target.dataset.speed,
  ease: "none",
  scrollTrigger: {
    trigger: ".secondpage",
    scroller: ".conatainers", 
    start: "0% 100%",
    end: "100% 0%",
    scrub: 5,
  }
});






gsap.to(".textoverlay",{
  duration:.7,
  ease:"none",
  scrollTrigger:{
    trigger: ".thridpage",
    scroller: ".conatainers",
    start:"0% 0%",
    end:"20% -100%",
    scrub:2,
    pin :true,
  }
 
})

 function uptexts()

{

  
  gsap.to(".uptextbox1",{
    fontSize: "5.5vw",
    lineHeight: "10vh",
    scrollTrigger:{
      trigger: ".uptext",
      scroller: ".conatainers",
      start:"0% 35%",
      end:"50% 30%",
      scrub:2,
    }
  })
  gsap.to(".uptextbox2",{
    fontSize: "5.5vw",
    lineHeight: "10vh",
    scrollTrigger:{
      trigger: ".uptext",
      scroller: ".conatainers",
      start:"60% 35%",
      end:"100% 30%",
      scrub:2,
  
    }
  })
  gsap.to(".uptextbox3",{
    fontSize: "5.5vw",
    lineHeight: "10vh",
    scrollTrigger:{
      trigger: ".uptext",
      scroller: ".conatainers",
      start:"120% 35%",
      end:"170% 30%",
      scrub:2,
    
    }
  })
  gsap.to(".uptextbox4",{
    fontSize: "5.5vw",
    lineHeight: "10vh",
    scrollTrigger:{
      trigger: ".uptext",
      scroller: ".conatainers",
      start:"200% 35%",
      end:"270% 30%",
      scrub:2,
    
    }
  })
  gsap.to(".uptextbox5",{
    fontSize: "5.5vw",
    lineHeight: "10vh",
    scrollTrigger:{
      trigger: ".uptext",
      scroller: ".conatainers",
      start:"270% 35%",
      end:"350% 30%",
      scrub:2,
    
    }
  })
  gsap.to(".uptextbox6",{
    fontSize: "5.5vw",
    lineHeight: "10vh",
    scrollTrigger:{
      trigger: ".uptext",
      scroller: ".conatainers",
      start:"350% 35%",
      end:"420% 30%",
      scrub:2,
    
    }
  })
  gsap.to(".uptextbox7",{
    fontSize: "5.5vw",
    lineHeight: "10vh",
    scrollTrigger:{
      trigger: ".uptext",
      scroller: ".conatainers",
      start:"420% 35%",
      end:"490% 30%",
      scrub:2,
    
    }
  })
  gsap.to(".uptextbox8",{
    fontSize: "5.5vw",
    lineHeight: "10vh",
    scrollTrigger:{
      trigger: ".uptext",
      scroller: ".conatainers",
      start:"490% 35%",
      end:"560% 30%",
      scrub:2,
    
    }
  })
  gsap.to(".uptextbox9",{
    fontSize: "5.5vw",
    lineHeight: "10vh",
    scrollTrigger:{
      trigger: ".uptext",
      scroller: ".conatainers",
      start:"560% 35%",
      end:"610% 30%",
      scrub:2,
    
    }
  })
  gsap.to(".uptextbox10",{
    fontSize: "5.5vw",
    lineHeight: "10vh",
    scrollTrigger:{
      trigger: ".uptext",
      scroller: ".conatainers",
      start:"610% 35%",
      end:"680% 30%",
      scrub:2,
    
    }
  })
  
}


uptexts()

function downtextbox(){
     
   



  gsap.to(".textbox1",{
    fontSize: "0px",
    duration:"0.7",
    ease:"none",
    scrollTrigger:{
      trigger: ".textbox",
      scroller: ".conatainers",
      start:"0% 50%",
      end:"70% 50%",
      scrub:2,

    }
  
   
  })
  gsap.to(".textbox2",{
    fontSize: "0px",
    duration:"0.7",
    lineHeight: "0vh",
    ease:"none",
    scrollTrigger:{
      trigger: ".textbox",
      scroller: ".conatainers",
      start:"70% 50%",
      end:"140% 50%",
      scrub:1,
    }
  
   
  })
  gsap.to(".textbox3",{
    fontSize: "0px",
    duration:"0.7",
    lineHeight: "0vh",
    ease:"none",
    scrollTrigger:{
      trigger: ".textbox",
      scroller: ".conatainers",
      start:"140% 50%",
      end:"210% 50%",
      scrub:1,
    }
  
  })
  gsap.to(".textbox4",{
    fontSize: "0px",
    duration:"0.7",
    lineHeight: "0vh",
    ease:"none",
    scrollTrigger:{
      trigger: ".textbox",
      scroller: ".conatainers",
      start:"210% 50%",
      end:"280% 50%",
      scrub:1,
    }
  
  })
  gsap.to(".textbox5",{
    fontSize: "0px",
    duration:"0.7",
    lineHeight: "0vh",
    ease:"none",
    scrollTrigger:{
      trigger: ".textbox",
      scroller: ".conatainers",
      start:"280% 50%",
      end:"350% 50%",
      scrub:1,
    }
  
  })
  gsap.to(".textbox6",{
    fontSize: "0px",
    duration:"0.7",
    lineHeight: "0vh",
    ease:"none",
    scrollTrigger:{
      trigger: ".textbox",
      scroller: ".conatainers",
      start:"350% 50%",
      end:"420% 50%",
      scrub:1,
    }
  
  })
  gsap.to(".textbox7",{
    fontSize: "0px",
    duration:"0.7",
    lineHeight: "0vh",
    ease:"none",
    scrollTrigger:{
      trigger: ".textbox",
      scroller: ".conatainers",
      start:"420% 50%",
      end:"449% 50%",
      scrub:1,
    }
  
  })
  gsap.to(".textbox8",{
    fontSize: "0px",
    duration:"0.7",
    lineHeight: "0vh",
    ease:"none",
    scrollTrigger:{
      trigger: ".textbox",
      scroller: ".conatainers",
      start:"449% 50%",
      end:"560% 50%",
      scrub:1,
    }
  
  })
  
  gsap.to(".textbox9",{
    fontSize: "0px",
    duration:"0.7",
    lineHeight: "0vh",
    ease:"none",
    scrollTrigger:{
      trigger: ".textbox",
      scroller: ".conatainers",
      start:"560% 50%",
      end:"630% 50%",
      scrub:1,
    }
  
  })
  
  gsap.to(".textbox10",{
    fontSize: "0px",
    duration:"0.7",
    lineHeight: "0vh",
    ease:"none",
    scrollTrigger:{
      trigger: ".textbox",
      scroller: ".conatainers",
      start:"630% 50%",
      end:"700% 50%",
      scrub:1,
    }
  
  })
  
  
}
downtextbox()


let navbar = document.querySelector("#navbar");
let fotter = document.querySelector(".fotter");


let fittertriggerheight = fotter.offsetHeight;


document.querySelectorAll(".row").forEach((row) =>{

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      scroller: ".conatainers",
      start: "top 50%",
      end: "top 50%",
      scrub: 3,
    }
  });
  tl.to(row, { gap: "10em", duration: 0.1, ease: "power1.inOut" });

})

document.querySelectorAll(".row").forEach((row) =>{

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      scroller: ".conatainers",
      start: "100% 50%",
      end: "100% 40%",
      scrub: 3,
    }
  });

  tl.to(row, { gap: "0em", delay:0.8, duration: 0.8, ease: "power1.inOut" });
})

gsap.to("#navbar1", {
  scrollTrigger: {
    trigger: ".footer",
    scroller: ".conatainers",
    start: "90% 60%", 
    end: "90% 25%",
    scrub: 1,
    onUpdate: (self) => {
      let progress = self.progress;
      let newTop = 50 + (100 - 50) * progress;
      document.querySelector("#navbar1").style.top = `${newTop}%`;
    }
  }
});
var fottertl = gsap.timeline({
  scrollTrigger: {
    trigger: ".fotter",
    scroller:".conatainers",
    start: "25% 50%", 
    end: "25% 50%",
    scrub: 1,
  }
});
fottertl.to("#navbar1 h1", {
  fontSize: "13vw",
  duration: 0.3,
  ease: "power1.inOut",
});
fottertl.to("#navbar1 #secondh1", {
  marginRight:"0px",
  duration: 0.3,
  ease: "power1.inOut",
});

function updateTime() {
  const now = new Date();
  const nyTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const laTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
  const miamiTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));

  document.getElementById('ny-hours').textContent = nyTime.getHours().toString().padStart(2, '0');
  document.getElementById('ny-minutes').textContent = nyTime.getMinutes().toString().padStart(2, '0');
  document.getElementById('la-hours').textContent = laTime.getHours().toString().padStart(2, '0');
  document.getElementById('la-minutes').textContent = laTime.getMinutes().toString().padStart(2, '0');
  document.getElementById('miami-hours').textContent = miamiTime.getHours().toString().padStart(2, '0');
  document.getElementById('miami-minutes').textContent = miamiTime.getMinutes().toString().padStart(2, '0');
}

setInterval(updateTime, 1000);
updateTime()


