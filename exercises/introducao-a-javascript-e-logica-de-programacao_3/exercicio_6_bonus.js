let n = 7;
let qtdDivisores = 0;

for (let numAtual = 1; numAtual <= n; numAtual++) 
{
    if (n % numAtual == 0) 
    {
        qtdDivisores++;
    }
}

if (qtdDivisores == 2) 
{
    console.log("O número " + n + " é primo");
} 
else 
{
    console.log("O número " + n + " não é primo");
} 