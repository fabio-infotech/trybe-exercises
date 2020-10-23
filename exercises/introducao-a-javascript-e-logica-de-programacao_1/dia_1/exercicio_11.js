let salario = "R$ 3.000,00";
let INSS;
let IR
let parcela;
let salarioBase = 0;
let salarioFinal = 0;

salario = Number(salario.replace("R$ ", "").replace(".", "").replace(",", "."));

if (salario <= 1556.94) {
    INSS = 0.08;
} 
else if (salario > 1556.94 && salario <= 2594.92) {
    INSS = 0.09;
} 
else if (salario > 2594.92 && salario <= 5189.82) {
    INSS = 0.11;
} 
else if (salario > 5189.82) {
    INSS = 570.88 / salario;
}

salarioBase = salario * (1 - INSS);

if (salarioBase <= 1903.98) {
    IR = 0;
  parcela = 0;
} 
else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    IR = 0.075;
    parcela = 142.8;
} 
else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    IR = 0.15;
    parcela = 354.8;
} 
else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    IR = 0.225;
    parcela = 636.13;
} 
else if (salarioBase > 4664.68) {
    IR = 0.275;
    parcela = 869.36;
}

salarioFinal = salarioBase - (salarioBase * IR - parcela);

console.log(salarioFinal);