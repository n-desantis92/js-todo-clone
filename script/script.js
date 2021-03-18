"use strict";

var listaSpesa = [
  "cacao",
  "burro",
  "pane",
];

for (var i = 0; i < listaSpesa.length; i++) {
  // clono il template
  var template = $(".template li").clone();
  // aggiungo le info al template
  template.prepend(listaSpesa[i]);
  // aggiungo il template alla lista
  $(".lista-spesa").append(template);
}

// cancello gli elementi della lista al click
$(".delete_list").click(function () {
  $(this).parent().remove();
});

// aggiungo gli elementi alla lista
$("#add_list").keydown(function (e) {

  if (e.which == 13) {
    var testo = $(this).val();

    if (testo != "" ) {

      // clono il template
      var template = $(".template li").clone();
      // aggiungo le info al template
      template.prepend(testo);
      // aggiungo il template alla listaSpesa
      $(".lista-spesa").append(template);
      // e lo inserisco nell'array
      listaSpesa.push($(this).val());
      // azzero il valore dell'input dell'utente
      $(this).val("");
      console.log(listaSpesa);
    }
  }
});
