//expandir ou ocultar resumo
function expandir(id) {
    // faz lista com todos elementos da class divInfResu
    var resumos = document.getElementsByClassName('divInfResu');

    // pecorre a lista da class
    for (var i = 0; i < resumos.length; i++) {
        resumos[i].style.display = 'none';
    }

    // exibe elemento cuja o id foi passado
    document.getElementById(id).style.display = 'block';
}