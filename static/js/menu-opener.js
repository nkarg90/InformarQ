$(".menu-opener").click(function(){
  $("#ocultar").toggle();
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});

$(".container").click(function(event)
{       
  if ($(this).hasClass('expand'))
    {
      $(this).removeClass('expand').addClass('shrink');
      $('#icon').removeClass('expand');
    }
  else
    {
      if ($(this).hasClass('shrink'))
        {
          $(this).removeClass('shrink').addClass('expand');
           
        }
      else
        {
          $(this).addClass('expand');
          
        }
       $('#icon').addClass('expand');
    }
  
});