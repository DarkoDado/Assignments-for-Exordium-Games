$(document).ready(function() {
  var wrongItems = [];
  var clickCount = 0;

  function checkSort() {
    wrongItems = [];
    $('#seasons-container > div').each(function() {
      var season = $(this).attr('id').split('-')[0];
      var itemExist = false;
      $('.element').each(function() {
        if ($(this).data('season') == season && $(this).parent().attr('id') == season + '-container') {
          itemExist = true;
          return false;
        }
      });
      if (!itemExist) {
        wrongItems.push(season);
      }
    });
  
    if (wrongItems.length == 0) {
      $('#check-btn').text('Correct');
      $('#show-answers-btn').hide();
    } else {
      $('#check-btn').text('Check');
      if ($('#check-btn').data('click-count') == 2) {
        $('#show-answers-btn').show();
      }
    }
  }
  
  function showAnswers() {
    $('.element').each(function() {
      var season = $(this).data('season');
      $('#' + season + '-container').append($(this));
      $(this).addClass('correct').removeClass('incorrect');
      $(this).siblings('.answer-status').html('&#x2713;').addClass('correct').removeClass('incorrect'); // add checkmark and remove cross
    });
    // $('#check-btn').text('Correct');
    $('#show-answers-btn').hide();
  }

  $('.element').draggable({
    revert: true,
    start: function() {
      $(this).removeClass('correct incorrect');
      $(this).siblings('.answer-status').html('');
    }
  });

  $('#spring-container, #summer-container, #autumn-container, #winter-container').droppable({
    drop: function(event, ui) {
      ui.draggable.appendTo($(this));
      checkSort();
    }
  });

  $('#check-btn').click(function() {
    clickCount++;
    $('.element').each(function() {
      if ($(this).parent().attr('id') == $(this).data('season') + '-container') {
        $(this).addClass('correct').removeClass('incorrect');
        $(this).siblings('.answer-status').html('&#x2713;').addClass('correct').removeClass('wrong');
      } else {
        $(this).removeClass('correct').addClass('incorrect');
        $(this).siblings('.answer-status').html('&#x2717;').addClass('wrong').removeClass('correct');
      }
    });
    if (wrongItems.length == 0) {
      $('#show-answers-btn').hide();
    } else {
      if (clickCount == 2) {
        $('#show-answers-btn').show();
      }
    }
  });

  $('#reset-btn').click(function() {
    $('.element').each(function() {
      $('#initial-container').append($(this));
      $(this).removeClass('correct incorrect').addClass('element');
     
    });
    clickCount = 0;
    $('#check-btn').text('Check');
    $('#show-answers-btn').hide();
    wrongItems = [];
  
  });

  $('#show-answers-btn').click(function() {
    showAnswers();
  });

  checkSort();
});
