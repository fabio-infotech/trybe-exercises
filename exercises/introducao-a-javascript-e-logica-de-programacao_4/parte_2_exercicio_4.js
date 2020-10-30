function verificaNomeMaiorQtdCaracteres (nomes)
{   
    let quantidadeCaracteres = 0;
    let nome = "";

    for (let pos in nomes) 
    {
        if (nomes[pos].length > quantidadeCaracteres) 
        { 
            quantidadeCaracteres = nomes[pos].length;
            nome = nomes[pos];
        }
    }    

    return nome;
}

console.log(verificaNomeMaiorQtdCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));