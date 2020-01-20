$(document).ready(function() {

    $('.menu').hide();
  
    $(window).scroll(function() { 
      if (isScrolledAfterElement("#complejo")) { 
        $('.menu').fadeIn(); 
      } else {
        $('.menu').fadeOut(); 
      }
    });
  
    //Function that returns true if the window has scrolled beyond the given element
    function isScrolledAfterElement(elem) {
      var $elem = $(elem);
      var $window = $(window);
  
      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();
  
      var elemTop = $elem.offset().top;
  
      return elemTop <= docViewBottom;
    }
  });