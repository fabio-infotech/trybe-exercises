function verificaPalindrome (palavra)
{   
    let cont = 0;
    for (let pos in palavra) 
    {
        if (palavra[pos] == palavra[palavra.length - pos -1]) 
        { 
            cont++; 
        }
        else
        {
            break;
        }
    }

    if(cont == palavra.length)
    {
        return true;
    } 
    else 
    {
        return false;
    }
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));

