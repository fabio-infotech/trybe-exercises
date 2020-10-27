//posição da rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posição da outra peça
let posicaoPecaLinha = 4;
let posicaoPecaColuna = 4;

//identifica se o ataque pode ocorrer ou não
let ataqueBemSucedido = false;

if (posicaoRainhaLinha == posicaoPecaLinha || posicaoRainhaColuna === posicaoPecaColuna)
{
    ataqueBemSucedido = true;
}

let linhaRainha;
let colunaRainha;

//diagonal superior direita
for (let supDir = 1; supDir < 8; supDir += 1)
{
    linhaRainha = posicaoRainhaLinha + supDir; //aumenta uma linha
    colunaRainha = posicaoRainhaColuna + supDir; //diminui uma coluna

    //se o tabuleiro acabou, sai do loop
    if ((linhaRainha > 8) && (colunaRainha > 8))
    {
        break;
    }
    
    if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha))
    {
        ataqueBemSucedido = true;
    }   

}

//diagonal superior esquerda
for (let supEsq = 1; supEsq < 8; supEsq += 1)
{
    linhaRainha = posicaoRainhaLinha + supEsq; //aumenta uma linha
    colunaRainha = posicaoRainhaColuna - supEsq; //diminui uma coluna

    //se o tabuleiro acabou, sai do loop
    if ((linhaRainha > 8) && (colunaRainha < 1))
    {
        break;
    }
    
    if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha))
    {
        ataqueBemSucedido = true;
    }   

}

//diagonal inferior esquerda
for (let infEsq = 1; infEsq < 8; infEsq += 1)
{
    linhaRainha = posicaoRainhaLinha - infEsq; //diminui uma linha
    colunaRainha = posicaoRainhaColuna - infEsq; //diminui uma coluna

    //se o tabuleiro acabou, sai do loop
    if ((linhaRainha < 1) && (colunaRainha < 1))
    {
        break;
    }
    
    if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha))
    {
        ataqueBemSucedido = true;
    }   

}

//diagonal inferior direita
for (let infDir = 1; infDir < 8; infDir += 1)
{
    linhaRainha = posicaoRainhaLinha - infDir; //diminui uma linha
    colunaRainha = posicaoRainhaColuna + infDir; //aumenta uma coluna

    //se o tabuleiro acabou, sai do loop
    if ((linhaRainha < 1) && (colunaRainha > 8))
    {
        break;
    }
    
    if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha))
    {
        ataqueBemSucedido = true;
    }   

}

console.log(ataqueBemSucedido);