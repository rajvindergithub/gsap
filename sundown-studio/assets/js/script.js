jQuery('.header_menu_icon').click(function(){
 
    jQuery('.full_black').css({'height':'100vh'});
    jQuery('.mobile-menu').css({'top':'0vh'}); 
});

jQuery('.mobile-menu-close').click(function(){
    
     jQuery('.full_black').css({'height':'0vh'});
    jQuery('.mobile-menu').css({'top':'-100vh'}); 
    
});

jQuery('.fecture_sec_row_main').mouseenter(function(){
   jQuery('.feature_img').fadeIn();
});

jQuery('.fecture_sec_row_main').mouseleave(function(){
   jQuery('.feature_img').fadeOut();
});

jQuery('.feature_sec_r_main').hover(function(){
    
    var imgAttr = jQuery(this).data('img');
    
    console.log(imgAttr);
    
    jQuery('.feature_img img').attr('src', imgAttr);
     jQuery('.feature_img').fadeIn();
    
});
 

jQuery('.s_f_l_big h3').click(function(){
    
    jQuery('.s_f_l_big h3').removeClass('active');
    
    jQuery(this).addClass('active');
    
    var text_sfl = jQuery(this).data('text');
    var img_sfl = jQuery(this).data('img');
    
    console.log(text_sfl, 'text');
    console.log(img_sfl, 'img');
    
    jQuery('.s_f_l_para p').text(text_sfl);
    jQuery('.sec_five_right img').attr('src', img_sfl);
    
});


var swiper = new Swiper('.who_we_wk_main', {
        slidesPerView: 4,
        spaceBetween: 30,
         slidesOffsetBefore: 50,
         slidesOffsetAfter: -40,
        breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
             slidesOffsetBefore: 0,
         slidesOffsetAfter: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
             slidesOffsetBefore: 0,
         slidesOffsetAfter: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
             slidesOffsetBefore: 0,
         slidesOffsetAfter: 0,
        }
    }
    
        
      });


 