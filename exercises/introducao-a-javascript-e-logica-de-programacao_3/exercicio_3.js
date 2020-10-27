let n = 5;
let linhaAsteriscos;

for(let contador = 1; contador <= n; contador++)
{
    linhaEspaco = "";
    linhaAsteriscos = "";    

    for(let qtdEspacos = 1; qtdEspacos <= n - contador; qtdEspacos++)
    {
        linhaEspaco = linhaEspaco + " ";
    }

    for(let qtdAsteriscos = 1; qtdAsteriscos <= contador; qtdAsteriscos++)
    {
        linhaAsteriscos = linhaAsteriscos + "*";
    }
    
    console.log(linhaEspaco + linhaAsteriscos);
}