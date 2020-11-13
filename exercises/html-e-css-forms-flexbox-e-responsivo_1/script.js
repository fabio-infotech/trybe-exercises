// Lista de objetos
const cbCurriculoEstado = document.getElementById('curriculo-estado');

const listaEstados = [
    {uf:"AC", descricao:"Acre"}, 
    {uf:"AL", descricao:"Alagoas"},
    {uf:"AP", descricao:"Amapá"},
    {uf:"AM", descricao:"Amazonas"},
    {uf:"BA", descricao:"Bahia"},
    {uf:"CE", descricao:"Ceará"},
    {uf:"DF", descricao:"Distrito Federal"},
    {uf:"ES", descricao:"Espírito Santo"},
    {uf:"GO", descricao:"Goiás"},
    {uf:"MA", descricao:"Maranhão"},
    {uf:"MT", descricao:"Mato Grosso"},
    {uf:"MS", descricao:"Mato Grosso do Sul"},
    {uf:"MG", descricao:"Minas Gerais"},
    {uf:"PA", descricao:"Pará"},
    {uf:"PB", descricao:"Paraíba"},
    {uf:"PR", descricao:"Paraná"},
    {uf:"PE", descricao:"Pernambuco"},
    {uf:"PI", descricao:"Piauí"},
    {uf:"RJ", descricao:"Rio de Janeiro"},
    {uf:"RN", descricao:"Rio Grande do Norte"},
    {uf:"RS", descricao:"Rio Grande do Sul"},
    {uf:"RO", descricao:"Rondônia"},
    {uf:"RR", descricao:"Roraima"},
    {uf:"SC", descricao:"Santa Catarina"},
    {uf:"SP", descricao:"São Paulo"},
    {uf:"SE", descricao:"Sergipe"},
    {uf:"TO", descricao:"Tocantins"}
];

function populaComboBoxEstados(listaEstados) {
    for(let estado = 0; estado < listaEstados.length; estado += 1) {
        const objEstado = listaEstados[estado];
        const optionEstado = document.createElement('option');

        optionEstado.value = objEstado.uf;
        optionEstado.text = objEstado.descricao;

        cbCurriculoEstado.appendChild(optionEstado);
    }
}

populaComboBoxEstados(listaEstados);

function isNumber(str) {
    return !isNaN(str);
}

function fctValidaData(obj)
{
    if (obj.value.length !== 10) {
        alert('Data de Início inválida');
        return false;
    }

    let data = obj.value;
    let dia = data.substring(0,2);
    let mes = data.substring(3,5);
    let ano = data.substring(6,10);
    let barra1 = data.substring(2,3);
    let barra2 = data.substring(5,6);

    if (barra1 !== '/' || barra2 !== '/') {
        alert('Data de Início com formato inválido');
        obj.focus();
        return false;
    }

    if (!isNumber(dia) || !isNumber(mes) || !isNumber(ano)) {
        alert('Data de Início inválida');
        obj.focus();
        return false;
    }
    if ((Number(dia) < 1)||(Number(dia) < 1 || Number(dia) > 30) && (mes === '04' || mes === '06' || mes === '09' || mes === '11' ) || Number(dia) > 31) {
        alert('Data de Início - Dia inválido');
        obj.focus();
        return false;
    }
    if (Number(mes) < 0 || Number(mes) > 12) {
        alert('Data de Início - Mês inválido');
        obj.focus();
        return false;
    }    
    if (Number(ano) < 0) {
        alert('Data de Início - Ano inválido');
        obj.focus();
        return false;
    }    
    return true;
}