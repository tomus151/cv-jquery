$( document ).ready(function() {
  var windowWidth = $(window).width();
  var FrontPage = {
       toClick: $('.section__image-and-title'),
       toHide: $('.center-div'),
       addElementToClick: function(){
            $('section').append('<div class="hideShow"></div>');
            $('footer').append('<div class="hideShow"></div>');
       },
       hideShowFunction: function(){
            this.toHide.each(function(){
                 $(this).css('display','none');
            });
            this.toClick.closest('section').find('.hideShow').on('click',function(){
                 $(this).parent().find('.center-div').slideToggle();
            })
            this.toClick.closest('footer').find('.hideShow').on('click',function(){
                 $(this).parent().find('.center-div').slideToggle();
            })
       },

       carousel: function(arrayCarouselSkills){
          //   console.log('window width:'+windowWidth);
            if(windowWidth > 610){
               //   console.log($(arrayCarouselSkills).find('.skills-left'));
                 var styleContainer = arrayCarouselSkills.css('width');
                 var translateXValue = 0;
                 counter = 0;
               //   console.log(styleContainer)
                 $( arrayCarouselSkills).find('.skills-left').on('click',function(){
                      if(counter == 0){
                           counter = 1;
                           var leftPosition = arrayCarouselSkills.find('.skills-itemlist-conatiner').css('left');
                           leftPosition.replace('px','');
                           leftPosition = parseInt(leftPosition);
                           var movement = leftPosition + 220;
                           if(leftPosition < 0){
                                arrayCarouselSkills.find('.skills-itemlist-conatiner').animate({left: movement+"px"}, 500);
                           }
                           setTimeout(FrontPage.counter() ,1000);
                     }
                 })
                 $( arrayCarouselSkills).find('.skills-right').on('click',function(){
                    //$(arrayCarouselSkills).css({"transform":"translateX(200px)"});
                    if(counter == 0){
                         counter = 1;
                         var rightPosition = arrayCarouselSkills.find('.skills-itemlist-conatiner').css('left');
                         rightPosition.replace('px','');
                         rightPosition = parseInt(rightPosition);
                         var movement = rightPosition - 220;
                         if(rightPosition > -3080 ){
                              arrayCarouselSkills.find('.skills-itemlist-conatiner').animate({left: movement+"px"}, 500);
                         }
                         setTimeout(FrontPage.counter() ,1000);
                    }
                 })
            }
       },
       counter: function(){
            return counter = 0;
       },
       showHideLightBox: function(){
             var wrapper = $('.light-box-active');
             var body = $('body');
             if( windowWidth > 769){
                 $('.expirience-home-image-container').on('click', function(){
                      body.addClass('active');
                      wrapper.addClass('light-box-active');
                      $('.light-box-backshadow').addClass('active');
                      $(this).parent().find('.light-box-container').addClass('active');
                       $(this).parent().find('.light-box-container').find('.monitor-container').append('<img class="click-icon" src="images/click.svg" alt="click icon">');
                 });
                 $('.light-box-backshadow').on('click', function (){
                      body.removeClass('active');
                      $(this).removeClass('active');
                      wrapper.removeClass('light-box-active');
                      $('body').find('.light-box-container').each(function(){
                           $(this).removeClass('active');
                         //   console.log($(this));
                      });
                 });
            }

       },
       sliderLightbox: function(){
            var arrayImages = ['home.png','cart.png','productView.png'];
            $('.light-box-container').find('.monitor-container img').on('click',function(){
                 $(this).parent().find('.click-icon').remove();
                 var counter = parseInt($(this).attr('data-counter'));
                 var self = $(this);
               //   console.log(counter);
                 counter = counter + 1;

                 //console.log(arrayImages[1]);
                 if( counter >= 4){
                      counter = 1;
                 }
                 $(this).attr('data-counter', counter);
                 var src = $(this).attr('src');
               $.each(arrayImages, function(index, string) {
                    var from = 0;
                    // console.log(from);
                    var to = src.length - string.length;
                    // console.log(to);
                    // console.log(counter);
                    var fileName = src.substring(src.length - string.length, src.length);
                    if( fileName == string){
                         var srcWithoutFile = src.substring(0, (src.length - string.length));
                         self.attr('src', srcWithoutFile+arrayImages[counter-1]);
                    }
                    // console.log();
               })

            })
       },
       removeDiv: function(){
            $('#top_10').remove();
            $('div').each(function(){
                 var attribute = $(this).attr('style');
                 if(attribute == "text-align:center;font-size:11px;font-family:arial;background-color:black;color:white"){
                      $(this).remove();
                 }
            })
       },
       removeShowWhereClick: function(){
            $('.click-container').each(function(){
                 var self = $(this);
                 $(this).parent().on('mouseover',function(){
                      self.remove();
                 })
            })


       }
 }
 var arrayCarouselSkills = $('.section__skills .center-div');
 FrontPage.carousel(arrayCarouselSkills);
 FrontPage.addElementToClick();
 FrontPage.hideShowFunction();
 FrontPage.showHideLightBox();
 FrontPage.sliderLightbox();
 FrontPage.removeDiv();
 FrontPage.removeShowWhereClick();
 $('.cbalink').remove();

});
