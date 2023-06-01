$(document).ready(function () {
    $("#mostrar-senha").click(function() {
        var campoSenha = $(".senha");
        if (campoSenha.attr("type") === "password") {
          campoSenha.attr("type", "text");
        } else {
          campoSenha.attr("type", "password");
        }
      });

      $('#cadastrar').click(function() { 
        alert('Cadastro Realizado com sucesso!');
        $('.senha').val('');
        $('.forms').val('');
    });
});