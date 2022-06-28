$(document).ready(function() {
  $('#cancella').on("click", function() {
   var id = $('#id').val();
   $.ajax({
    url: '/delete/:id',
    type: 'DELETE',
    data: {"id": id},
    dataType: 'json',
    success: function(data) {
     //do something
   }});
  });
 });