function verificaIndiceMaiorValor (numeros)
{   
    let maiorValor = 0;
    let posAtual = 0;
    for (let pos in numeros) 
    {
        if (numeros[pos] > maiorValor) 
        { 
            maiorValor = numeros[pos];
            posAtual = pos;
        }        
    }    

    return posAtual;
}

console.log(verificaIndiceMaiorValor([2, 3, 6, 7, 10, 1]));