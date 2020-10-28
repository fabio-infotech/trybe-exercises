function verificaFimPalavra (word, ending)
{
    if(ending == word.substring(word.length - ending.length, word.length))
    {
        return true;
    }
    else
    {
        return false;
    }    
}

console.log(verificaFimPalavra("trybe", "be"));