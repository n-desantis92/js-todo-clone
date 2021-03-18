

var listaSpesa = [
  "cacao",
  "burro",
  "pane",
]

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


$(".add_list").keydown(function (e) {

  if (e.wich == 13) {
    var testo = $(this).val();
    // clono il template
    var template = $(".template li").clone();
    // aggiungo le info al template
    template.prepend(testo);
    // aggiungo il template alla listaSpesa
    $(".lista-spesa").append(template);
    $(this).val("");
  }
});
