function verificaIndiceMenorValor (numeros)
{   
    let menorValor = Infinity;
    let posAtual = 0;
    for (let pos in numeros) 
    {
        if (numeros[pos] < menorValor) 
        { 
            menorValor = numeros[pos];
            posAtual = pos;
        }
    }    

    return posAtual;
}

console.log(verificaIndiceMenorValor([2, 4, 6, 7, 10, 0, -3]));