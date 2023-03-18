
$(document).ready(function() {
    $('#theme-selector').change(function() {
        var theme = $(this).val();
        if (theme == 'theme1') {
            $('body').removeClass('theme2').addClass('theme1');
        } else if (theme == 'theme2') {
            $('body').removeClass('theme1').addClass('theme2');
        }
    });
});