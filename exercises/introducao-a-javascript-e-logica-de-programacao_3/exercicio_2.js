let n = 5;
let linhaAsteriscos;

for(let contador = 1; contador <= n; contador++)
{
    linhaAsteriscos = "";

    for(let qtdAsteriscos = 1; qtdAsteriscos <= contador; qtdAsteriscos++)
    {
        linhaAsteriscos = linhaAsteriscos + "*";
    }

    console.log(linhaAsteriscos);
}