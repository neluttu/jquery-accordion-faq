$(document).ready(function() {
    $(".question h4").click(function() {
      if ($('.faqAnswer').is(':visible')) {
          $(".faqAnswer").slideUp(300);
          $('.faqContainer').removeClass("open");
          $('h4').removeClass("open");
      }

      if ($(this).next(".faqAnswer").is(':visible')) {
          $(this).next(".faqAnswer").slideUp(300);
          $(this).parent().removeClass("open");
          $(this).removeClass("open");
      } 
      else { 
          $(this).next(".faqAnswer").slideDown(300);
          $(this).parent().addClass('open');
          $(this).addClass('open');
      }
    });
  });