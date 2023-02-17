$(document).ready(function(){
    $("#search-box").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      var filter = $('#search-filter').val().toLowerCase();
      if(filter == "listitem") {
        $(".listitem").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      } else {
        $(".td-"+filter).filter(function() {
          $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      }
    });
    $('#search-filter').on("change",function(){
      var value = $("#search-box").val().toLowerCase();
      var filter = $(this).val().toLowerCase();
      if(filter == "listitem") {
        $(".listitem").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      } else {
        $(".td-"+filter).filter(function() {
          $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      }
    });
     $(".tbl-btn").click(function(e) {
       e.preventDefault();
       $(this).parent().parent().find('td:not(:first-child)').toggleClass('active');
       $(this).toggleClass('rotate');
     });
  });