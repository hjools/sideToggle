(function($){
  $.fn.sideToggle = function(moving) {
    return this.click(function(){
      var right = parseInt($(moving).css('right'), 10);
      var menuWidth = $(moving).outerWidth();
      if (right === 0) {
        $(moving).animate({'right' : -menuWidth
                          });
      } else {
        $(moving).animate({'right' : '0px'});
      }
    });
  }
}(jQuery));


// $('#sideMenu').sideToggle('#sideMenuContainer');