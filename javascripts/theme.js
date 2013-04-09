 if (window.jQuery) {
  $(window).load(function(){
      $('head').append( '<meta http-equiv="refresh" content="30" />' );
  });
 }; 
 window.setTimeout(function(){window.location.href=window.location.href},30000);
