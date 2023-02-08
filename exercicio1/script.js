function OlaPessoa(nome){
    const frase = `Olá, ${nome}!` 
    console.log (frase)
}

OlaPessoa('Lincon')
OlaPessoa('Dani')
OlaPessoa('Ruby')


function tabuada(numero){
    const numero1 = numero * 1
    const numero2 = numero * 2
    const numero3 = numero * 3
    const numero4 = numero * 4
    const numero5 = numero * 5
    const numero6 = numero * 6
    const numero7 = numero * 7
    const numero8 = numero * 8
    const numero9 = numero * 9
    const numero10 = numero * 10
console.log(`${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}, ${numero6},${numero7}, ${numero8}, ${numero9}, ${numero10}`)
}

tabuada(4)
tabuada(5)
tabuada(7)
tabuada(8)
tabuada(13)

// Foram realizadas duas funções, uma capaz de retornar o nome de uma pessoa e outra capaz de calcular a tabuada de um número de 1 até 10. Interessante ver a facilitação que a função traz ao não precisar criar diversas variáveis, podendo repetir aquela informaçaõ para vários nomes ou números.


const olaPessoa = (nome) => {
    const frase = `Olá, ${nome}!` 
    console.log (frase)
}

OlaPessoa('Lincon')
OlaPessoa('Dani')
OlaPessoa('Ruby')



const tabuadaTres = (numero) => {
    const numero1 = numero * 1
    const numero2 = numero * 2
    const numero3 = numero * 3
    const numero4 = numero * 4
    const numero5 = numero * 5
    const numero6 = numero * 6
    const numero7 = numero * 7
    const numero8 = numero * 8
    const numero9 = numero * 9
    const numero10 = numero * 10
console.log(`${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}, ${numero6},${numero7}, ${numero8}, ${numero9}, ${numero10}`)
}

tabuadaTres(4)
tabuadaTres(5)
tabuadaTres(7)
tabuadaTres(8)
tabuadaTres(13)


// Outra forma
const tabuadaDois = (numero) => {
    const numeroTabuadaDois = `${numero * 1}, ${numero * 2}, ${numero * 3}, ${numero * 4}, ${numero * 5}, ${numero * 6}, ${numero * 7}, ${numero * 8}, ${numero * 9}, ${numero * 10}`


    return numeroTabuadaDois    
}

tabuada(4)
tabuada(5)
tabuada(7)
tabuada(8)
tabuada(13)