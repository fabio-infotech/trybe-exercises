let n = 7;
let qtdLinhasEmBranco = Math.round(n/2);

for (let contadorA = 0; contadorA < n; contadorA = contadorA + 2) 
{
    linha = "";
    
    for (let contadorB = 1; contadorB <= n; contadorB++) 
    {
        if (qtdLinhasEmBranco - contadorA/2 == contadorB || contadorB == qtdLinhasEmBranco + contadorA/2) 
        {
            linha = linha + "*";
        } 
        else if ( contadorA == n - 1) 
        {
            linha = linha + "*";
        }   
        else 
        {
            linha = linha + " ";
        }
    }

  console.log(linha);
} 