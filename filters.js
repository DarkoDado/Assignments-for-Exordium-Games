$(document).ready(function() {
    // Učitavanje JSON podataka
    $.getJSON("dataset_1.json", function(data) {
      // Prikazivanje igara u katalogu igara
      var gamesCatalog = $("#game-catalog");
      $.each(data, function(gameName, gameInfo) {
        var gameDiv = $("<div></div>").addClass("game");
        $("<img/>", {
          src: gameInfo.url,
          alt: gameName,
          title: gameName
        }).appendTo(gameDiv);
        $("<h2></h2>").text(gameName).appendTo(gameDiv);
        $("<p></p>").text(gameInfo.genre).appendTo(gameDiv);
        $("<p></p>").text(gameInfo.style).appendTo(gameDiv);
        gameDiv.appendTo(gamesCatalog);
      });
    });
  });
  