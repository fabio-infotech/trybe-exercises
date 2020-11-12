window.onload = function() {
    const btnSaveBackgroundColor = document.getElementById('btn-saveBackgroundColor');
    const caixaTextoBackground = document.getElementById('background-color-input');

    caixaTextoBackground.addEventListener('keyup', checkEnterEvent);
    btnSaveBackgroundColor.addEventListener('click', salvarCorFundoTela);
    
    //Carrega a cor de fundo da tela configurada pelo usuário
    let backgroundColor = localStorage.getItem('background-color');
    document.body.bgColor = backgroundColor;

    function checkEnterEvent(event) {
        if (event.type === 'keyup')
        {
            if (event.keyCode === 13 && event.target.id == 'background-color-input') {
                
                event.preventDefault();
                btnSaveBackgroundColor.click();
            }
        }
    }

    function salvarCorFundoTela() {
        if (caixaTextoBackground.value == '') {
            alert('Digite uma cor para o fundo da tela');
        }
        else {
            localStorage.removeItem('background-color');
            localStorage.setItem('background-color', caixaTextoBackground.value);

            document.body.bgColor = caixaTextoBackground.value;
            caixaTextoBackground.value = '';
        }
    }
}


