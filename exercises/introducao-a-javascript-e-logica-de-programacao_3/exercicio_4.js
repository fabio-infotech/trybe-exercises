let n = 5;
let linha = "";

for (let contador = 1; contador <= Math.ceil(n/2); contador++) 
{
    linha = "";
    
    for (let espaco = 1; espaco <= Math.ceil(n/2 - contador); espaco++)
    {
        linha = linha + " ";
    }
    if (n % 2 == 0) 
    {
        for (let asterisco = 1; asterisco <= contador * 2; asterisco++)
        {
            linha = linha + "*";
        }
    } 
    else 
    {
        for (let asterisco = 1; asterisco <= contador * 2 - 1; asterisco++)
        {
            linha = linha + "*";
        }
    }
    for (let espaco = 1; espaco <= Math.ceil(n/2 - contador); espaco++)
    {
        linha = linha + " ";
    }

  console.log(linha);
} 