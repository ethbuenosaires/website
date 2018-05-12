$( document ).ready(function(){
  $('#friday-tab').on( "click", function() {
	  $('#friday-tab').addClass('active');
	  $('#saturday-tab').removeClass('active');
	  $('#sunday-tab').removeClass('active');

	  $('#friday').removeClass('hidden');
	  $('#saturday').addClass('hidden');
	  $('#sunday').addClass('hidden');
	});
	$('#saturday-tab').on( "click", function() {
	  $('#saturday-tab').addClass('active');
	  $('#friday-tab').removeClass('active');
	  $('#sunday-tab').removeClass('active');

	  $('#friday').addClass('hidden');
	  $('#saturday').removeClass('hidden');
	  $('#sunday').addClass('hidden');
	});
	$('#sunday-tab').on( "click", function() {
	  $('#sunday-tab').addClass('active');
	  $('#friday-tab').removeClass('active');
	  $('#saturday-tab').removeClass('active');

	  $('#friday').addClass('hidden');
	  $('#saturday').addClass('hidden');
	  $('#sunday').removeClass('hidden');
	});
	
})