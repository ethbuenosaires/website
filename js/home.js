$( document ).ready(function(){
  $(".button-collapse").sideNav();
  
  $('.sidenav-close').on( "click", function() {
	  $('.button-collapse').sideNav('hide');
	});
  
  $('.modal').modal();
})