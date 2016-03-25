(function($){
  $.fn.sideToggle = function(moving) {
    return this.click(function(){
      var right = parseInt($(moving).css('right'), 10);
      var menuWidth = $(moving).outerWidth();
      if (right === 0) {
        $(moving).velocity({'right' : -menuWidth
                          });
      } else {
        $(moving).velocity({'right' : '0px'});
      }
    });
  }
}(jQuery));


// $('#sideMenu').sideToggle('#sideMenuContainer');