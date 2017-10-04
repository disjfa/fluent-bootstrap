$(function () {
  $(document).on('click', '.js-toggle-class', function(e) {
    e.preventDefault();
    var target = $(this).data('target');
    $(target).toggleClass($(this).data('class'));
  })
});