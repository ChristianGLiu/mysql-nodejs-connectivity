$(document).ready(function() {

  function reload() {
    $('.hidden').fadeOut();
    $('displayOutput').empty();
    $.get( '/get', function(data) {
      var rendered = "<ul>";
      data.forEach(function(item) {
        rendered = rendered + "<li title="+item.CUS_NAME+">The customer address <b>" + item.CUS_ADDR + "</b></li>";
      });
      rendered = rendered + "</ul>";

      $('#displayOutput').html(rendered);
    });
    $('.hidden').fadeIn();
  }

  $('#add-customer').submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: '/put',
      type: 'PUT',
      data: $(this).serialize(),
      success: function(data) {
        reload();
      }
    });
  });

  // load data on start
  reload();

});
