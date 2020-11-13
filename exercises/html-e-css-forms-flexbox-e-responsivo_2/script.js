// Lista de objetos
const form = document.getElementsByTagName('form')[0];
const body = document.getElementsByTagName('body')[0];
const txtCurriculoNome = document.getElementById('curriculo-nome');
const cbCurriculoEstado = document.getElementById('curriculo-estado');
const btnCurriculoSubmit = document.getElementById('curriculo-submit');
const btnCurriculoLimpar = document.getElementById('curriculo-limpar');
const txtCurriculoDataInicio = document.getElementById('curriculo-data-inicio');

// Lista de eventos dos objetos
//btnCurriculoSubmit.addEventListener('click', stopDefAction);
btnCurriculoLimpar.addEventListener('click', limparFormulario);

// new window.JustValidate('.curriculo-form');
validation.init("form");

txtCurriculoDataInicio.DatePickerX.init({
    format: 'dd/mm/yyyy'

    // Options and defaults.
    /*
    mondayFirst      : true,
    format           : 'yyyy/mm/dd',
    minDate          : new Date(0, 0),
    maxDate          : new Date(9999, 11, 31),
    weekDayLabels    : ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'],
    shortMonthLabels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    singleMonthLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    todayButton      : true,
    todayButtonLabel : 'Today',
    clearButton      : true,
    clearButtonLabel : 'Clear' 
    */
});

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
    if (form.checkValidity()) {
        console.log(event.target.form);
        showData(event);
    } else {
        window.alert('Dados inválidos!');
    }
}

function limparFormulario() {
  const showDataDiv = document.getElementById('show-data');
  if (showDataDiv !== null) {
    body.removeChild(showDataDiv);
  }
}