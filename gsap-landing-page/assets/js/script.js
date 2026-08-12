console.log('Script loaded');

var heroFoldAnimOne = document.querySelector('.heroFold_anim_one');
var heroFoldAnimTwo = document.querySelector('.heroFold_anim_two');

gsap.from(heroFoldAnimOne, {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5,
    repeat: -1,
    repeatDelay: 1, 
     yoyo: true,
       
       filter: "drop-shadow(0px -100px 0px rgba(255,255,255,0.5))",
    
});

gsap.from(heroFoldAnimTwo, {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5, 
    repeat: -1, 
    repeatDelay: 1,
     yoyo: true,
  
       filter: "drop-shadow(0px 100px 0px rgba(255,255,255,0.5))",
});



var rightElems = document.querySelectorAll('.sec-fold-right');

rightElems.forEach(function(elem) {

//        console.log('Element:', elem);

        elem.addEventListener('mouseenter', function() {
          
            gsap.to( elem.childNodes[3], {
                duration: 0.5,
                opacity: 1,
                ease: "power2.out",
                scale: 1
            });


        });

        elem.addEventListener('mouseleave', function() {
            
            gsap.to( elem.childNodes[3], {
                duration: 0.5,
                opacity: 0,
                ease: "power2.out",
                scale: 1
            });

        });

        elem.addEventListener('mousemove', function(e) {
           
//            console.log(e);

            gsap.to( elem.childNodes[3], {
                 x : e.x - elem.getBoundingClientRect().x - 70, 
                  y : e.y - elem.getBoundingClientRect().y - 120, 
                  ease: "power2.out",
            });
            

        });

});

var page3center = document.querySelector('#page3 .page3-center');

var videoHeroPage = document.querySelector('#page3 video');

var navBar = document.querySelector('nav');

var close_video = document.querySelector('.close_video');

page3center.addEventListener('click', function(){

            page3center.style.display = "none";
            close_video.style.opacity = 1;
            
            videoHeroPage.play(); 
            gsap.to( videoHeroPage, {
                   transform: "scaleX(1) scaleY(1)",
                   opacity : 1,
                   borderRadius: 0,                   


            } );   
            
        
});

videoHeroPage.addEventListener('click', function(){

        page3center.style.display = "block";  
         close_video.style.opacity = 0;

     videoHeroPage.pause(); 
            gsap.to( videoHeroPage, {
                   transform: "scaleX(0.1) scaleY(0.85)",
                   opacity : 0,
                   borderRadius: "40px",                   
            } ); 
});


var sections = document.querySelectorAll('.sec-right');


sections.forEach(function(elem){
     
    elem.addEventListener("mouseenter", function(){
       
        elem.childNodes[3].style.opacity = 1; 
        elem.childNodes[3].play(); 
        
    });
    
     elem.addEventListener("mouseleave", function(){
       
        elem.childNodes[3].style.opacity = 0; 
        elem.childNodes[3].load(); 
        
    });
    
    
    
    
});


var getDigitalProductList =  document.querySelectorAll('.dpdp_s_m_list h4');

console.log(getDigitalProductList);

getDigitalProductList.forEach(function(eachElem){
    
//    console.log(eachElem);
    
});

gsap.registerPlugin(ScrollTrigger);

gsap.from('.dpdp_s_m_div_sec .dpdp_s_m_list h4', {
    x: 0,
    duration: 2,
    stagger: {
        amount:-0.5
    },
     ease: 'power2.out',
    scrollTrigger: {
        trigger: ".dpdp_s_m_div_sec .dpdp_s_m_list",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 10%", 
        scrub: true
    }
     
    
});

gsap.from('.dpdp_s_m_div_third .dpdp_s_m_list h4', {
    x: 0,
    duration: 2,
    stagger: {
        amount:-0.5
    },
     ease: 'power2.out',
    scrollTrigger: {
        trigger: ".dpdp_s_m_div_third .dpdp_s_m_list",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 10%", 
        scrub: true
    }
     
    
});


gsap.from('.dpdp_s_m_div_four .dpdp_s_m_list h4', {
    x: 0,
    duration: 2,
    stagger: {
        amount:-0.5
    },
     ease: 'power2.out',
    scrollTrigger: {
        trigger: ".dpdp_s_m_div_four .dpdp_s_m_list",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 10%", 
        scrub: true
    }
     
    
});





