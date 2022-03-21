/* global $, alert, console*/

$(function(){

        "use strict";
        var myHeader = $(".header");
            

        myHeader.height($(window).height());

        $(window).resize(function(){

            myHeader.height($(window).height());
            $(".bxslider").each(function (){

                $(this).css("paddingTop",($(window).height() - $(".bxslider li").height())/2 );
             });

        });

        $(".links li").click(function(){

            $(this).addClass("active").siblings().removeClass("active");
        });

            //slider
          

         /* $(".bx-wrapper").height($(window).height());  

          $(window).resize(function(){
            $(".bx-wrapper").height($(window).height());  
            
          });*/


         $(".bxslider").each(function (){

            $(this).css("paddingTop",($(window).height() - $(".bxslider li").height())/2 );
         });
         $(window).resize(function(){
            $(".bxslider").each(function (){

                $(this).css("paddingTop",($(window).height() - $(".bxslider li").height())/2 );
             });

        });
          
          
         $('.bxslider').bxSlider({
            pager:false
        });

});
