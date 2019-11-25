$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var adj1Input = $("input#adjective1").val();
    var adj2Input = $("input#adjective2").val();
    var noun1Input = $("input#noun1").val();
    var noun2Input = $("input#noun2").val();

    $(".adjective1").text(adj1Input);
    $(".adjective2").text(adj2Input);
    $(".noun1").text(noun1Input);
    $(".noun2").text(noun2Input);

    $("#story").show();

    event.preventDefault();
  });
});
