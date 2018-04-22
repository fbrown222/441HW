
$(document).ready(function(){
  getQuote();

  var randomQuote;
  var author;

  function getQuote(){

    var url ="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?";
    $.getJSON(url, function(data){
      $(".quote").html('"'+data.quoteText+'"');

      $(".author").html('-'+data.quoteAuthor);

    });




}


$("#newQuote").on("click", function(){

  getQuote();
});

});
