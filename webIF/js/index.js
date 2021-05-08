const arrayImage = [
  {name: "home", href: "https://images.hdqwalls.com/wallpapers/minimal-landscape-4k-ro.jpg"},
  {name: "our project", href: "https://i.pinimg.com/originals/bb/c1/7a/bbc17a7360f0268dbddd6347c9e11bfb.jpg"},
  {name: "contact", href: "https://1.bp.blogspot.com/-DZlVzjP-deI/X4N3srezjEI/AAAAAAAAbwE/amz0mU-iC1Mhrz_SNrQBajBrjkxyLUVRACLcBGAsYHQ/s16000/DESERT-NIGHT-DESKTOP-HD.png"}
]

var tl3 = gsap.timeline()
$(document).ready(() =>{
  setInterval(() => {
    tl3.fromTo('.scroll-arrow',{opacity: 1, duration: 2, y: "0"}, {opacity: 0.4, duration: 2, y: "20%" })
    tl3.fromTo('.scroll-arrow',{opacity: 0.4, duration: 2, y:"20%"}, {opacity: 1, duration: 2, y: "0"})
    
  },1000)

})


$('html, body').animate({scrollTop:0}, 'slow');
$('.scroll-arrow').click(() => {
  $('html, body').animate({scrollTop:1000}, 'slow');
})  

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); 
  // Give the backgrounds some random images
  section.bg.style.backgroundImage = `url(${arrayImage[i].href})`;
  // Do the parallax effect on each section
  console.log(i)
  if (i) {
    section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
  } 
  // the first image should be positioned against the top. Use px on the animating part to work with GSAP. 
  else {
    section.bg.style.backgroundPosition = "50% 0px"; 
    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top", 
        end: "bottom top",
        scrub: true
      }
    });
  }
});






gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.fromTo('header .Home .text h1',{opacity: 0, x: "-100vw"}, {
  x: '0',
  opacity: 1,
  duration: 2,
  scrollTrigger: {
    trigger: 'header .Home',
    start: 'top center',
    masker: true
  }
});

tl.fromTo('header .Home .text p, header .Home .text a',{opacity: 0, x: 0}, {
  x: '0',
  opacity: 1,
  duration: 2,
  scrollTrigger: {
    trigger: 'header .Home',
    start: 'top center',
    masker: true
  }
});

gsap.fromTo('header .Our-project h1',{opacity: 0, x: "-100vw"}, {
  x: '0',
  opacity: 1,
  duration: 2,
  scrollTrigger: {
    trigger: 'header .Our-project',
    start: 'top center',
    masker: true
  }
});


gsap.fromTo('header .Contact h1',{opacity: 0, x: "-100vw"}, {
  x: '0',
  opacity: 1,
  duration: 2,
  scrollTrigger: {
    trigger: 'header .Contact',
    start: 'top center',
    masker: true
  }
});

ScrollTrigger.create({
  snap: 1 / 2
});


var arrayPanels = ['.box01', '.box02', '.box03', '.box04']
var IP = 0;
var BIP; 

function nextPanels() {
      if(IP === 3) {
        return 0;
      } else
      if (IP <= 3){
        BIP = IP + 1;
        gsap.fromTo(arrayPanels[IP], {left: '0%'},{left: '100%', duration: 2})
        gsap.fromTo(arrayPanels[BIP], {left: '-100%'},{left:'0%', duration: 2})
          if (IP !== 4) {
            IP+=1;
          }
      }
}




function prevPanels() {
      if(IP === 0){
        return 0;
      }else 
      if (IP >= 0){
        BIP = IP - 1;
        gsap.fromTo(arrayPanels[IP], {left: '0%'},{left: '-100%', duration: 2})
        gsap.fromTo(arrayPanels[BIP], {left: '100%'},{left:'0%', duration: 2}) 
          IP -= 1;
      }

}










