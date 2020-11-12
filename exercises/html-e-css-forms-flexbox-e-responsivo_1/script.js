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

// Popula ComboBox Estados
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