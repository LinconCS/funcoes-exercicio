function soma(numero1, numero2){
    const soma = numero1 + numero2
    
        return soma
    }

function subtracao(numero1, numero2){
    const subtracao = numero1 - numero2
        
    return subtracao
    }

function multiplicacao(numero1, numero2){
    const multiplicacao = numero1 * numero2
    
    return multiplicacao
    }

function divisao(numero1, numero2){
    const divisao = numero1 / numero2
        
    return divisao
    }

const numero1 = Number(prompt('Insira um número'))
const numero2 = Number(prompt('Insira um segundo número'))

const resultSoma = soma (numero1, numero2)
const resultSubtracao = subtracao (numero1, numero2)
const resultMultiplicacao = multiplicacao (numero1, numero2)
const resultDivisao = divisao (numero1, numero2)

const frase1 = `O resultado da soma dos números digitados é? ${resultSoma}.`
console.log(frase1) 
const frase2 = `O resultado da subtração dos números digitados é? ${resultSubtracao}.`
console.log(frase2) 
const frase3 = `O resultado da multiplicação dos números digitados é? ${resultMultiplicacao}.`
console.log(frase3)
const frase4 = `O resultado da divisão dos números digitados é? ${resultDivisao}.`
console.log(frase4)  
