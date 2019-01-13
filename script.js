
$('.wood, .vector').hide();

$(document).ready(function() {

  $('.item').hover(
    function() {
      $(this).css('height', '60%');
      $('.item').not($(this)).css('height', '10%');
      $(this).find('.wood, .vector').fadeIn();
      $(this).find('.keyword').css('opacity', '.75');
      $(this).find('.inset').css('left', '2vw');
    },
    function() {
      $(this).find('.wood, .vector').fadeOut(200);
      $(this).find('.keyword').css('opacity', '.4');
      $(this).find('.inset').css('left', '-200vw');
      $('.item').css('height', '20%');
    }); //end hover

    $('.vector').hover(
      function() {
        $(this).css('opacity', '.85');
      }, function() {
        $(this).css('opacity', '.6');
      });

    $('.item a').hover(
      function() {
      $(this).closest( $('.item') ).find( $('.vector') ).css('opacity', '.85');
    }, function() {
      $(this).closest( $('.item') ).find( $('.vector') ).css('opacity', '.6');
    });

  }); //end ready
