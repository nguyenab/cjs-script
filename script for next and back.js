// Here You can type your custom JavaScript...
(function ($) {
    $(document).ready(function() {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.has('PersonID');
    let PersonID = searchParams.get('PersonID');
    $('.box-primary.box-body').append('<a class="btn btn-app prev-member" role="button" href="/PersonView.php?PersonID='+(parseInt(PersonID) -1)+'"><i class="fa fa-chevron-left"></i> PREVIOUS MEMBER</a>')
    $('.box-primary.box-body').append('<a class="btn btn-app next-member" role="button" href="/PersonView.php?PersonID='+(parseInt(PersonID) + 1)+'"><i class="fa fa-chevron-right"></i> NEXT MEMBER</a>')
    let href_goto = '';
    $(document).keydown(function(e) {

        switch(e.which) {
            case 37: // left
            href_goto = $('.prev-member').attr('href');
            window.location = href_goto;
            break;

            case 38: // up
            break;

            case 39: // right
            href_goto = $('.next-member').attr('href');
            window.location = href_goto;
            break;

            case 40: // down
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault();
    });
});
})(jQuery);