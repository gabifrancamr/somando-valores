var input1 = document.querySelector("input");
input1.focus();
function somar(){
var i1 = document.getElementById('valor1');
var i2 = document.getElementById('valor2')
var n1 = Number(i1.value);
var n2 = Number(i2.value);
var resultado = document.querySelector('p#resultado')
var soma = n1 + n2
resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`
input1.focus()
var input = document.getElementById('valor1')
input.value=''
var input = document.getElementById('valor2')
input.value=''
}