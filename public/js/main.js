/**
 * An 'on click' event listener for all of the like buttons.
 * Sends a request to Express JS endpoint to get new total of likes.
 * 
 **/
$('#likes a').click(function(event){
  event.preventDefault();
  var id = $(event.target).parents(".activity").attr("id");
  $.ajax({
    type: "GET",
    url : "/activity/" + id + "/like",
    success: function(data) {
      $("#"+id +" .likesVal").text(data["likes"]);
    },
    error : function(e){
      displayErrorModal(e);
      // console.log(e);
    }
  });
});

/**
 * Using for displaying errors from the event listener
 **/
function displayErrorModal(error){
  $('.error-alert .modal-title').html('An Error has occured');
  $('.error-alert .modal-body').html(error.responseText);
  $('.error-alert').modal('show');
}


