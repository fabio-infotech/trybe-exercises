//declara um variável "estudante" do tipo objeto
let estudante = {
    nome: 'Joana',
    idade: 43,
    hardSkills: 3,
    softSkills: 5,
};

estudante.cidade = 'São Paulo'; //acrescenta a propriedade "cidade" no objeto "estudante"
estudante['comidaFavorita'] = 'Doritos'; //acrescenta a propriedade "comidaFavorita" no objeto estudante
estudante['nome'] = 'João'; //altera o "nome" do objeto "estudante" para "João"
estudante.apelidos = ['Apelido1', 'Apelido2', 'Apelido3'];
estudante.edereco = {
    logradouro: 'Rua Dalvo Trombeta',
    numero: 357
}

//console.log(estudante); //escreve o objeto "estudante" no console

for (let key in estudante)
{    
    //console.log(key); //escreve as propriedades do objeto "estudante" no console (nome, idade, etc..)
    //console.log(key, estudante[key]);    
}

function trybe(estudanteTrybe)
{
    let pessoaDesenvolvedora = estudanteTrybe;

    pessoaDesenvolvedora.hardSkills = 10;
    pessoaDesenvolvedora.softSkills = 10;
    pessoaDesenvolvedora.carreiraSkills = 10;
    pessoaDesenvolvedora.tryber = true;

    return pessoaDesenvolvedora;
}

//console.log(trybe(estudante));

function soma (num1, num2)
{
    return num1 + num2;
}

let resultado = soma(10, 5);

console.log(resultado);