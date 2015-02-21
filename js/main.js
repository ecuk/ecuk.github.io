// $(".nav a").on("click", function(){
//   $(".nav").find(".active").removeClass("active");
//   $(this).parent().addClass("active");
//   alert("click");
// });
$(function(){
  $('.nav').find('a[href="' + location.pathname + '"]').closest('li').addClass('active');
});
