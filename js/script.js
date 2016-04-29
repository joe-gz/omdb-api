
// initial API call
$(document).ready( function() {
  $(".search").click(function(){
    apiCall();
  })
})


var apiCall = function() {
  var searchText = $("#keyword").val();
  var OMDBurl = "https://www.omdbapi.com/?t="+ searchText;

  var config = {
    url: OMDBurl,
    type: "GET",
    dataType: "json"
  };

  $.ajax(config)
    .done(displayResults)
}

function displayResults(response){
 console.log(response);
}
