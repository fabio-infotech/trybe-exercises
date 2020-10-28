function contaNumeros(numero, numeros)
{
    cont = 0;
    for(let pos in numeros)
    {
        if(numeros[pos] === numero)
        {
            cont += 1;
        }
    }
    return cont;
}

function numeroQueMaisSeRepete(numeros)
{
    let numero = numeros[0];

    for(let pos in numeros)
    {
        if(contaNumeros(numeros[pos], numeros) > contaNumeros(numero, numeros))
        {
            numero = numeros[pos];
        }
    }
    
    return numero;
}

console.log(numeroQueMaisSeRepete([2, 3, 2, 5, 8, 2, 3]));