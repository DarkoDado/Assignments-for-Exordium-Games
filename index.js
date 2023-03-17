$(document).ready(function () {
  var correctAnswers = ["a", "b"];
  var showAnswersCount = 0;
  var incorrectAnswersCount = 0;

  $(".check").click(function () {
    var selectedAnswers = [];
    
    $(".answers label").removeClass("correct incorrect");
    $('input[name="answer"]').each(function () {
      var answer = $(this).val();
      if ($(this).is(":checked")) {
        if (correctAnswers.includes(answer)) {
          $(this).parent().addClass("correct");
        } else {
          $(this).parent().addClass("incorrect");
        }
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
      
      // Proverava da li su sva pitanja tacna, koja su selektovana
      var allCorrectSelected = correctAnswers.every(function (val) {
        return selectedAnswers.indexOf(val) !== -1;
      });

      if (allCorrectSelected) {
        $(".answers label.incorrect").removeClass("incorrect");
      } else {
        incorrectAnswersCount++;
        if (incorrectAnswersCount === 2) {
          $(".show-answers").removeClass("inactive").show();
          $(".check").prop("disabled", true); // onemogucava Check dugme ako je kliknuto 2x
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

  $(".show-answers").click(function () {
    $('input[name="answer"]').each(function () {
      var answer = $(this).val();
      if (correctAnswers.includes(answer)) {
        $(this).parent().addClass("correct").removeClass("incorrect");
      } else {
        $(this).parent().addClass("incorrect").removeClass("correct");
      }
    });
    $(".show-answers").hide();
  });

  $(".show-answers").hide();
});
