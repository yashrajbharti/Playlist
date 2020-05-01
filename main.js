$('.playSE').click(function(){
    $('.playSE').css("opacity","0");
    $('.playSE').css("z-index","1");
    $('.pauseSE').css("opacity","1");
    $('.pauseSE').css("z-index","2");
    $('.play').click();
});
$('.pauseSE').click(function(){
    $('.pauseSE').css("opacity","0");
    $('.pauseSE').css("z-index","1");
    $('.playSE').css("opacity","1");
    $('.playSE').css("z-index","2");
    $('.pause').click();
});

$(function() {
           // Setup the player to autoplay the next track

           var a = audiojs.createAll({
               trackEnded: function() {
                   var next = $('ol li.playing').next();
                   if (!next.length) next = $('ol li').first();
                   next.addClass('playing').siblings().removeClass('playing');
                   audio.load($('a', next).attr('data-src'));
                   audio.play();
                   pleasework();
               }
           });

           // Load in the first track
           var audio = a[0];
           first = $('ol a').attr('data-src');
           $('ol li').first().addClass('playing');
           audio.load(first);

           // Load in a track on click
           $('ol li').click(function(e) {
               e.preventDefault();
               $(this).addClass('playing').siblings().removeClass('playing');
               audio.load($('a', this).attr('data-src'));
               audio.play();
           });
           // Keyboard shortcuts
           $(document).keydown(function(e) {
               var unicode = e.charCode ? e.charCode : e.keyCode;
               // right arrow
               if (unicode == 39) {
                   var next = $('li.playing').next();
                   if (!next.length) next = $('ol li').first();
                   next.click();
                   $('.pause').click();
                   $('.pauseSE').css("opacity","0");
                   $('.pauseSE').css("z-index","1");
                   $('.playSE').css("opacity","1");
                   $('.playSE').css("z-index","2");
                   // back arrow
               } else if (unicode == 37) {
                   var prev = $('li.playing').prev();
                   if (!prev.length) prev = $('ol li').last();
                   prev.click();
                   $('.pause').click();
                   $('.pauseSE').css("opacity","0");
                   $('.pauseSE').css("z-index","1");
                   $('.playSE').css("opacity","1");
                   $('.playSE').css("z-index","2");
                   // spacebar
               } else if (unicode == 32) {
                   audio.playPause();
                   if($('.playSE').css('z-index') == 2)
                        {
                          $('.playSE').css("opacity","0");
                          $('.playSE').css("z-index","1");
                          $('.pauseSE').css("opacity","1");
                          $('.pauseSE').css("z-index","2");
                        }
                    else {
                      $('.pauseSE').css("opacity","0");
                      $('.pauseSE').css("z-index","1");
                      $('.playSE').css("opacity","1");
                      $('.playSE').css("z-index","2");
                    }
               }
           })
       });



$('.next').click(function(){
  var next = $('li.playing').next();
  if (!next.length) next = $('ol li').first();
  next.click();
    $('.pause').click();
    $('.pauseSE').css("opacity","0");
    $('.pauseSE').css("z-index","1");
    $('.playSE').css("opacity","1");
    $('.playSE').css("z-index","2");

});



$('.prev').click(function(){
  var prev = $('li.playing').prev();
  if (!prev.length) prev = $('ol li').last();
  prev.click();
    $('.pause').click();
    $('.pauseSE').css("opacity","0");
    $('.pauseSE').css("z-index","1");
    $('.playSE').css("opacity","1");
    $('.playSE').css("z-index","2");
});


function pleasework() {

if ($('li.a1').hasClass('playing')){

  document.documentElement.style.setProperty('--main-a-color', '#ec3');
  $('.one').css("display","block");
  $('.two').css("display","none");
  $('.three').css("display","none");

}

else if($('li.a2').hasClass('playing')) {

  document.documentElement.style.setProperty('--main-a-color', '#a53757');
  $('.one').css("display","none");
  $('.two').css("display","block");
  $('.three').css("display","none");
}
else if($('li.a3').hasClass('playing')) {

  document.documentElement.style.setProperty('--main-a-color', '#453');
  $('.one').css("display","none");
  $('.two').css("display","none");
  $('.three').css("display","block");
}
};

$(window).click(pleasework)

document.getElementById("mybody").style.transition = "all 2s";
