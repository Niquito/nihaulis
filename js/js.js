$( window ).load(function() {

    var clipboard = new Clipboard('#CopiarTexto');


    $(".btn-letra").click(function(){

      var letra = $(this).text();

      $('#CajaTexto').val($('#CajaTexto').val() + letra);
      $("#CajaTexto").focus();

    });

$("#CopiarTexto").click(function(){

  $("#Respuesta").fadeIn("fast");
  setTimeout(function(){  $("#Respuesta").fadeOut("slow"); },2500);


});

  $("#btn-tipotexto").click(function(){

    $("#Mayus").toggle();
    $("#Minus").toggle();

    $("#CajaTexto").focus();

  });

});