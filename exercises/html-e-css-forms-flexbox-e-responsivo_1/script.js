// Lista de objetos
const form = document.getElementsByTagName('form')[0];
const body = document.getElementsByTagName('body')[0];
const cbCurriculoEstado = document.getElementById('curriculo-estado');
const btnCurriculoSubmit = document.getElementById('curriculo-submit');
const txtCurriculoDataInicio = document.getElementById('curriculo-data-inicio');

// Lista de eventos dos objetos
btnCurriculoSubmit.addEventListener('click', stopDefAction);

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
    if (obj.length !== 10) {
        alert('Data de Início inválida');
        return false;
    }

    let data = obj;
    let dia = data.substring(0,2);
    let mes = data.substring(3,5);
    let ano = data.substring(6,10);
    let barra1 = data.substring(2,3);
    let barra2 = data.substring(5,6);

    if (barra1 !== '/' || barra2 !== '/') {
        alert('Data de Início com formato inválido');
        return false;
    }

    if (!isNumber(dia) || !isNumber(mes) || !isNumber(ano)) {
        alert('Data de Início inválida');
        return false;
    }
    if ((Number(dia) < 1)||(Number(dia) < 1 || Number(dia) > 30) && (mes === '04' || mes === '06' || mes === '09' || mes === '11' ) || Number(dia) > 31) {
        alert('Data de Início - Dia inválido');
        return false;
    }
    if (Number(mes) < 0 || Number(mes) > 12) {
        alert('Data de Início - Mês inválido');
        return false;
    }    
    if (Number(ano) < 0) {
        alert('Data de Início - Ano inválido');
        return false;
    }    
    return true;
}

function showData(e) {
    const showDataDiv = document.getElementById('show-data');
    if (showDataDiv !== null) {
        body.removeChild(showDataDiv);
    }
    const div = document.createElement('div');
    div.id = 'show-data';
    for (index = 0; index < e.target.form.length - 1; index += 1) {
        if (e.target.form[index].value !== undefined) {
        if (
            e.target.form[index].type !== 'radio' ||
            e.target.form[index].checked === true
        ) {
            const p = document.createElement('p');
            p.innerHTML = `${e.target.form[index].name}: ${e.target.form[index].value}`;
            div.appendChild(p);
        }
        }
    }
    body.appendChild(div);
}

function stopDefAction(event) {
    event.preventDefault();
    if (fctValidaData(txtCurriculoDataInicio.value) && form.checkValidity()) {
        console.log(event.target.form);
        showData(event);
    }
}