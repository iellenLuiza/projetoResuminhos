/* esconder e mostrar divs dos resumos */ /* bug que só funciona a primeira */
var divResu = document.querySelector('.divResu');
var divInfResu = document.querySelector('.divInfResu');

divResu.addEventListener('click',function(){
    if(divInfResu.style.display === 'block'){
        divInfResu.style.display = 'none'
    }else{
        divInfResu.style.display = 'block'
    }
});