let valorCusto = 100;
let valorVenda = 200;
let impostoSobreOCusto = 0;
let valorCustoTotal = 0;
let lucro = 0;

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Valores inválidos");
} 
else {
    impostoSobreOCusto = valorCusto * 20 / 100;
    valorCustoTotal = valorCusto + impostoSobreOCusto;
    lucro = (valorVenda - valorCustoTotal) * 1000;
        
    console.log("A empresa terá um lucro de R$ " + lucro);
}