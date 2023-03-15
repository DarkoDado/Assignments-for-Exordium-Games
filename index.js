// $(document).ready(function () {
//   var correctAnswers = ["a", "b"];
//   var showAnswersCount = 0;
//   var incorrectAnswersCount = 0;

//   $(".check").click(function () {
//     var selectedAnswers = [];
//     $('input[name="answer"]').each(function () {
//       var answer = $(this).val();
//       if ($(this).is(":checked")) {
//         selectedAnswers.push(answer);
//         if (correctAnswers.includes(answer)) {
//           $(this).parent().addClass("correct").removeClass("incorrect");
//         } else {
//           $(this).parent().addClass("incorrect").removeClass("correct");
//         }
//       } else {
//         $(this).parent().removeClass("correct incorrect");
//       }
//     });

//     if (
//       selectedAnswers.length === correctAnswers.length &&
//       selectedAnswers.every(function (val) {
//         return correctAnswers.indexOf(val) !== -1;
//       })
//     ) {
//       $(".check").prop("disabled", true);
//       $(".reset").prop("disabled", true);
//       $(".show-answers").removeClass("inactive").show();
//     } else {
//       $(".answers label").removeClass("correct").addClass("incorrect");
//       incorrectAnswersCount++;
//       if (incorrectAnswersCount === 2) {
//         $(".show-answers").removeClass("inactive").show();
//       }
//     }
//   });

//   $(".reset").click(function () {
//     $('input[name="answer"]').prop("checked", false);
//     $(".answers label").removeClass("correct incorrect");
//     $(".check").prop("disabled", false);
//     $(".reset").prop("disabled", false);
//     $(".show-answers").addClass("inactive").hide();
//     showAnswersCount = 0;
//     incorrectAnswersCount = 0;
//   });

//   $('.show-answers').click(function() {
//     for (var i = 0; i < correctAnswers.length; i++) {
//       $('input[name="answer"][value="' + correctAnswers[i] + '"]').parent().addClass('correct').removeClass('incorrect');
//     }
//     $('.show-answers').hide();
//   });
  
// $('.show-answers').hide();

// });


$(document).ready(function () {
    var correctAnswers = ["a", "b"];
    var showAnswersCount = 0;
    var incorrectAnswersCount = 0;
  
    $(".check").click(function () {
      var selectedAnswers = [];
      $('input[name="answer"]').each(function () {
        var answer = $(this).val();
        if ($(this).is(":checked")) {
          selectedAnswers.push(answer);
          if (correctAnswers.includes(answer)) {
            $(this).parent().addClass("correct").removeClass("incorrect");
          } else {
            $(this).parent().addClass("incorrect").removeClass("correct");
          }
        } else {
          $(this).parent().removeClass("correct incorrect");
        }
      });
  
      if (
        selectedAnswers.length === correctAnswers.length &&
        selectedAnswers.every(function (val) {
          return correctAnswers.indexOf(val) !== -1;
        })
      ) {
        $(".check").prop("disabled", true);
        $(".reset").prop("disabled", true);
        $(".show-answers").removeClass("inactive").show();
      } else {
        // Check if all correct answers have been selected
        var allCorrectSelected = correctAnswers.every(function (val) {
          return selectedAnswers.indexOf(val) !== -1;
        });
  
        if (allCorrectSelected) {
          // If all correct answers have been selected, remove incorrect class from all labels
          $(".answers label.incorrect").removeClass("incorrect");
        } else {
          $(".answers label").removeClass("correct").addClass("incorrect");
          incorrectAnswersCount++;
          if (incorrectAnswersCount === 2) {
            $(".show-answers").removeClass("inactive").show();
          }
        }
      }
    });
  
    $(".reset").click(function () {
      $('input[name="answer"]').prop("checked", false);
      $(".answers label").removeClass("correct incorrect");
      $(".check").prop("disabled", false);
      $(".reset").prop("disabled", false);
      $(".show-answers").addClass("inactive").hide();
      showAnswersCount = 0;
      incorrectAnswersCount = 0;
    });
  
    $('.show-answers').click(function() {
      for (var i = 0; i < correctAnswers.length; i++) {
        $('input[name="answer"][value="' + correctAnswers[i] + '"]').parent().addClass('correct').removeClass('incorrect');
      }
      $('.show-answers').hide();
    });
    
    $('.show-answers').hide();
  });