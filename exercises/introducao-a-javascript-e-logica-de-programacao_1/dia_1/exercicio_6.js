let peca = "bispo"

switch(peca.toLowerCase()) {
    case "rei":
        console.log("Rei -> qualquer direção");
        break;
    case "rainha":
        console.log("Rainha -> qualquer direção");
        break; 
    case "torre":
        console.log("Torre -> vertical e horizontal");
        break;
    case "cavalo":
        console.log("Cavalo -> em L");
        break;  
    case "bispo":
        console.log("Bispo -> diagonal");
        break;         
    case "peão":
        console.log("Peão -> frente");
        break;
    default:
        console.log("Peça inválida");
        break;
} 