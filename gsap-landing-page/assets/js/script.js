 

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

//
//var sections = document.querySelectorAll('.fddf_r_block');
//
//
//sections.forEach(function(elem){
//     
//    elem.addEventListener("mouseenter", function(){
//       
//        elem.childNodes[3].style.opacity = 1; 
//        elem.childNodes[3].play(); 
//        
//    });
//    
//     elem.addEventListener("mouseleave", function(){
//       
//        elem.childNodes[3].style.opacity = 0; 
//        elem.childNodes[3].load(); 
//        
//    });
//    
//    
//    
//    
//});


var getDigitalProductList =  document.querySelectorAll('.dpdp_s_m_list h4');

//console.log(getDigitalProductList);

getDigitalProductList.forEach(function(eachElem){
    
//    console.log(eachElem);
    
});


jQuery('.fddf_r_b_video').mouseenter(function(){
    console.log('mouse enter');
     
});

jQuery('.fddf_r_b_video').mouseleave(function(){
    console.log('mouse leave');
     
});
 

const box = document.querySelectorAll(".fddf_r_block");
 
box.forEach(function(boxEach, index){
    
    
    console.log('.fddf_r_line_'+[index], 'dss'); 
    
    gsap.set('.fddf_r_line_'+[index], {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '2px',
    scaleX: 0,
    transformOrigin: 'left',
    backgroundColor: '#fff'
});
    
     
    boxEach.addEventListener("mouseenter", () => {
        gsap.to('.fddf_r_line_'+[index], {
            scaleX: 1,
            duration: 1,
            ease: "power2.out"
        });
    });

    boxEach.addEventListener("mouseleave", () => {
        gsap.to('.fddf_r_line_'+[index], {
            scaleX: 0,
            duration: 1,
            ease: "power2.in"
        });
    });
    
});

/* Second fold animation */
gsap.registerPlugin(ScrollTrigger);

var thrFoldFirst = jQuery('.left-an-th-fold-first');
var thrFoldFirstRight = jQuery('.right-an-th-fold-first');

var thrFoldSecond = jQuery('.left-an-th-fold-second');
var thrFoldSecondRight = jQuery('.right-an-th-fold-second');

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#layout-gride-thrid-fold",
        start: "top 30%",
        end: "top 90%",
        repeat: -1, 
        yoyo: true,
 
        
    }
});

tl.from(thrFoldFirst, {
    x: -1500,
    duration: 1,
    ease: "power4.out",
    
});

tl.from(thrFoldFirstRight, {
    x: 1500,
    duration: 1,
    ease: "power4.out",
    
}, '-=1');

tl.from(thrFoldSecond, {
    x: -1500,
    duration: 1,
    ease: "power4.out",
    
});

tl.from(thrFoldSecondRight, {
    x: 1500,
    duration: 1,
    ease: "power4.out",
    
}, '-=1');




/* Second fold animation */

jQuery('.fddf_r_block').on('mouseenter', function () {
    var video = jQuery(this).find('video').get(0);

    video.currentTime = 0; // Start from beginning
    video.play();
});

jQuery('.fddf_r_block').on('mouseleave', function () {
    var video = jQuery(this).find('video').get(0);

    video.pause();
    video.currentTime = 0; // Reset when mouse leaves
});








