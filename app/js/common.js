function changePage(pageName) {
    $('.nav-group-item').removeClass('active');
    $('.pane').removeClass('padded-more');
    if (pageName != 'sites') {
        $('.pane').addClass('padded-more');
    }

    $.get('./app/' + pageName + '.html', function(data) {
        $('.pane').html(data);
    });

    $('#' + pageName).addClass('active');
}