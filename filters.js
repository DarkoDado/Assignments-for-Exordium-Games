$(document).ready(function () {
  // Funkcija za prikazivanje JSON podataka
  function showData(jsonFile) {
    $.getJSON(jsonFile, function (data) {
      var gamesCatalog = $('#game-catalog')
      gamesCatalog.empty() // da bude prazan prethodni prikaz
      $.each(data, function (gameName, gameInfo) {
        var gameDiv = $('<div></div>').addClass('game')
        $('<img/>', {
          src: gameInfo.url,
          alt: gameName,
          title: gameName,
        }).appendTo(gameDiv)
        $('<h2></h2>').addClass('gameCard').text(gameName).appendTo(gameDiv)
        $('<p></p>').addClass('zanrStil').text(gameInfo.genre).appendTo(gameDiv)
        $('<p></p>').addClass('zanrStil').text(gameInfo.style).appendTo(gameDiv)
        gameDiv.appendTo(gamesCatalog)
      })

      $('#genre-filter, #style-filter').empty()

      // Kreiranje filtera po genre-u
      var genres = {}
      $.each(data, function (gameName, gameInfo) {
        if (!genres[gameInfo.genre]) {
          genres[gameInfo.genre] = true
        }
      })

      $.each(genres, function (genre, value) {
        $('<button></button>')
          .addClass('genreButton')
          .text(genre)
          .appendTo('#genre-filter')
      })

      // Kreiranje filtera po style-u
      var styles = {}
      $.each(data, function (gameName, gameInfo) {
        if (!styles[gameInfo.style]) {
          styles[gameInfo.style] = true
        }
      })

      $.each(styles, function (style, value) {
        $('<button></button>')
          .addClass('styleButton')
          .text(style)
          .appendTo('#style-filter')
      })
    })
  }

  // Prikaz prvog JSON fajla na loadu stranice
  showData('dataset_1.json')

  // Promena prikaza po izboru u select option
  $('#dataset-select').change(function () {
    var selectedFile = $(this).val()
    showData(selectedFile)
  })

  // Filtriranje po zanru
  $(document).on('click', '.genreButton', function () {
    var genre = $(this).text()
    $('#game-catalog .game').each(function () {
      var gameGenre = $(this).find('.zanrStil').eq(0).text()
      if (gameGenre === genre) {
        $(this).show()
      } else {
        $(this).hide()
      }
    })
  })

  // Filtriranje po style-u
  $(document).on('click', '.styleButton', function () {
    var style = $(this).text()
    $('#game-catalog .game').each(function () {
      var gameStyle = $(this).find('.zanrStil').eq(1).text()
      if (gameStyle === style) {
        $(this).show()
      } else {
        $(this).hide()
      }
    })
  })

  // Pretraga igara po nazivu
  $('#search-form').off(function () {
    var searchText = $('#game-name-input').val().toLowerCase()
    $('#game-catalog .game').each(function () {
      var gameName = $(this).find('h2').text().toLowerCase()
      if (!gameName.includes(searchText)) {
        $(this).hide()
      } else {
        $(this).show()
      }
    })
  })

  // Reset pretrage igara po nazivu
  $('#game-name-input').on('keyup', function () {
    var searchText = $(this).val().toLowerCase()
    $('#game-catalog .game').each(function () {
      var gameName = $(this).find('h2').text().toLowerCase()
      if (!gameName.includes(searchText)) {
        $(this).hide()
      } else {
        $(this).show()
      }
    })
  })

  // Reset input polja
  $('#reset-button').on('click', function () {
    $('#game-name-input').val('')
    $('#game-catalog .game').show()
  })

  // REsetovanje filtera
  $(document).on('click', '#reset-filters', function () {
    // prikazuje sve igre koje su prethodno bile sakrivene
    $('#game-catalog .game:hidden').show()
    // resetuje pretragu po nazivu
    $('#game-name-input').val('')
    // resetuje filtere po genre-u i style-u
    $('.genreButton, .styleButton').removeClass('active')

    // Reset select opcije na podrazumevanu vrednost
    $('#dataset-select').val('dataset_1.json')

    // Poziv funkcije showData() sa nazivom prvog dataset-a "dataset_1.json"
    showData('dataset_1.json')
  })
})
