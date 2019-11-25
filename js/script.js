$(document).ready(function(){
//  $('.theButton').click(function(){
//      $('.container').siblings().hide();
//  })

//  $('.theButton').click(function(){
//      $(this).hide();
//  });

//  $('.theButton').click(function(){
// 	$  ('.container').siblings().fadeTo(1000, .5);
//  });

//  $('.superButton').click(function(){
// 	$  ('.container').siblings().fadeTo(1000, 1);
//  });

 $('.theButton').mouseenter(function(){
	$(this).addClass('black');
 });

$('.theButton').mouseleave(function(){
	$(this).removeClass('black');
 });

});

