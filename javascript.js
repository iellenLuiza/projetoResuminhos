//// esconder e mostrar divs dos resumos 
// pega as linhas da lista
var itens = document.querySelectorAll("#resuminhos li"),
    tab = [], index;

// cria ação de clicar em um item específio
for (var i = 0; i < itens.length; i++) {

    // ação do item clicado
    itens[i].onclick = function () {

        /*não funciona, não passa o número do item clicado para a função expandir*/

        // teste "manual" que função expandir funciona
        expandir(0);

    };
}

function expandir(idInfResu) {
    document.getElementById(idInfResu).style.display = 'block';
    var divInfResu = document.getElementsByClassName('divInfResu');
    for(var c = 0; c < divInfResu.length; c++){
        if(c != idInfResu){
            divInfResu[c].style.display = 'none'
        } 
    }
}