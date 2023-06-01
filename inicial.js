$(document).ready(function () {
    $('.conteudo').hide();
    $('#show').hide();
    $('.nav').hide();


    $('#cadastrar').click(function() { 
        alert('Cadastro Realizado com sucesso!');
        $('.forms').val('');
        $('.senha').val('');
    });

    $("#mostrar-senha").click(function() {
        var campoSenha = $(".senha");
        if (campoSenha.attr("type") === "password") {
          campoSenha.attr("type", "text");
        } else {
          campoSenha.attr("type", "password");
        }
      });

    $("#box").on("click", function() {
      if ($(this).is(":checked")) {
          $("#show").show();
      } else {
          $("#show").hide();
      }

      let opcao = ['#morango','#chocolate','#limao'];
      let indice = Math.floor(Math.random() * opcao.length);
      let certo = opcao[indice];

      $('#bolo').text(certo);

      $(certo).click(function (e) { 
        $('.conteudo').show();
        $('.teste').hide();
        $('.nav').show();

      });
      certo = ''

    });    

    
});

