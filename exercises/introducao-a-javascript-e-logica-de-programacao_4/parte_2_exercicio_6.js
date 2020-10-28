function somaNumeros (numero)
{
    let soma = 0;

    for (let pos = 1; pos <= numero; pos++)
    {
        soma = soma + pos;    
    }

    return soma;
}

console.log(somaNumeros(5));