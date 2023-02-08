function somaNumero(numero1, numero2){

const soma = numero1 + numero2
const frase = `A soma do número ${numero1} mais o número ${numero2} é? ${soma}.` 
console.log(frase)
}

somaNumero(7, 10)
somaNumero(6, 9)
somaNumero(2, 18)


function maiorOuIgual(numero1, numero2){

const verifica = numero1 >= numero2
const frase = `O número ${numero1} é maior ou iagual ao número ${numero2}? ${verifica}.`    
console.log(frase)
}
    
maiorOuIgual(7, 10)
maiorOuIgual(13, 8)
maiorOuIgual(4, 4)


function paridade(numero){

const ehPar = numero % 2 === 0
const frase = `O número ${numero} é par? ${ehPar}.`
console.log(frase)
}
        
paridade(7)
paridade(8)
paridade(39)


function salario(numero){

const salarioLiquido = numero - (numero * 0.1)
const frase = `O salário líquido do trabalhador após desconto do INSS é? ${salarioLiquido}.`
    
return frase
}
            
console.log(salario(2000.00))
console.log(salario(5400.00))
console.log(salario(6785.52))




