var idade = "21/10/2018";
var calculo =  2021 - idade.slice(6) ;
var maior = calculo >= 18 

function resultado(TextoResultado) {
    console.log(TextoResultado);
 }

if (maior == true)
    resultado("A pessoa é maior de 18 anos. ")
else
    resultado("A pessoa não é maior de 18 anos. ")

