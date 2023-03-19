$(document).ready(function() {
    // Funkcija za prikazivanje JSON podataka
    function showData(jsonFile) {
      $.getJSON(jsonFile, function(data) {
        var gamesCatalog = $("#game-catalog");
        gamesCatalog.empty(); // da bude prazan prethodni prikaz
        $.each(data, function(gameName, gameInfo) {
          var gameDiv = $("<div></div>").addClass("game");
          $("<img/>", {
            src: gameInfo.url,
            alt: gameName,
            title: gameName
          }).appendTo(gameDiv);
          $("<h2></h2>").addClass("gameCard").text(gameName).appendTo(gameDiv);
          $("<p></p>").addClass("zanrStil").text( gameInfo.genre).appendTo(gameDiv);
          $("<p></p>").addClass("zanrStil").text( gameInfo.style).appendTo(gameDiv);
          gameDiv.appendTo(gamesCatalog);
      })}
)}


    // Prikaz prvog JSON fajla na loadu stranice
    showData("dataset_1.json");

    // Promena prikaza po izboru u select option
    $("#dataset-select").change(function() {
      var selectedFile = $(this).val();
      showData(selectedFile);
    })




      // Pretraga igara po nazivu
      $("#search-form").off(function() {
        var searchText = $("#game-name-input").val().toLowerCase();
        $("#game-catalog .game").each(function() {
        var gameName = $(this).find("h2").text().toLowerCase();
        if (!gameName.includes(searchText)) {
        $(this).hide();
        } else {
        $(this).show();
        }
        });
        });
        
        // Reset pretrage igara po nazivu
        $("#game-name-input").on("keyup", function() {
        var searchText = $(this).val().toLowerCase();
        $("#game-catalog .game").each(function() {
        var gameName = $(this).find("h2").text().toLowerCase();
        if (!gameName.includes(searchText)) {
        $(this).hide();
        } else {
        $(this).show();
        }
        });
        });


          // Reset input polja
  $("#reset-button").on("click", function() {
    $("#game-name-input").val("");
    $("#game-catalog .game").show();
  });
  
})