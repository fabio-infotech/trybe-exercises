function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;

      weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// Exercício 1
const daysList = [29, 30];
for (index = 1; index <= 31; index += 1) {
  daysList.push(index);
};

const getDaysList = document.querySelector('#days');

for (let index = 0; index < daysList.length; index += 1) {
  const day = daysList[index];
  const dayItem = document.createElement('li');
  if (day === 24 | day === 31) {
    dayItem.className = 'day holiday';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  } else if (day === 4 | day === 11 | day === 18) {
    dayItem.className = 'day friday';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  } else if (day === 25) {
    dayItem.className = 'day holiday friday';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  } else {
    dayItem.className = 'day';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  }
};

// Exercício 2
function createNewButtonHoliday(buttonName) {
    let div = document.querySelector('.buttons-container');
    let btnHoliday = document.createElement('button');

    btnHoliday.id = 'btn-holiday';
    btnHoliday.innerHTML = buttonName;
    div.appendChild(btnHoliday);
}

createNewButtonHoliday('Feriados');

// Exercício 3
let btnHoliday = document.getElementById('btn-holiday');

btnHoliday.addEventListener('click', function() {
    const holidays = document.querySelectorAll('.holiday');
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === 'orange') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holidays[index].style.backgroundColor = 'orange';
      }
    }
  });

// Exercício 4
function createNewButtonFriday(buttonName) {
    let div = document.querySelector('.buttons-container');
    let btnFriday = document.createElement('button');

    btnFriday.id = 'btn-friday';
    btnFriday.innerHTML = buttonName;
    div.appendChild(btnFriday);
}

createNewButtonFriday('Sexta-feira');

// Exercício 5
const fridayDays = [4, 11, 18, 25];
const btnFriday = document.getElementById('btn-friday');

btnFriday.addEventListener('click', function() {
  const fridays = document.getElementsByClassName('friday');
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== "SEXTOU!") {
      fridays[index].innerHTML = "SEXTOU!";
    } else {
      fridays[index].innerHTML = fridayDays[index];
    }
  }
});

// Exercício 6
const ul = document.getElementById('days');

ul.addEventListener('mousemove', aumentaFonte);
ul.addEventListener('mouseout', diminuiFonte);

function aumentaFonte(event) {
    event.target.style.fontSize = '30px';
}

function diminuiFonte(event) {
    event.target.style.fontSize = '20px';
}

// Exercício 7
function createNewTask(taskName) {
    let div = document.querySelector('.my-tasks');
    let tagSpan = document.createElement('span');
    
    tagSpan.innerHTML = taskName;
    div.appendChild(tagSpan);
}

createNewTask('Cozinhar');

// Exercício 8
function createNewLegend(legendColor) {
    let div = document.querySelector('.my-tasks');
    let divTask = document.createElement('div');
    
    divTask.id = 'task';
    divTask.className = 'task';
    divTask.style.backgroundColor = legendColor;

    div.appendChild(divTask);
}

createNewLegend('red');

// Exercício 9
const divTask = document.getElementById('task');

divTask.addEventListener('click', selectTask);

function selectTask() {
    if (divTask.className == 'task') {
        divTask.className = 'task-selected';
    }
    else {
        divTask.className = 'task';
    }    
}

// Exercício 10
ul.addEventListener('click', setLegendColor);

function setLegendColor(event) {
    if (event.target.style.color !== document.querySelector('.task-selected').style.backgroundColor) {
        event.target.style.color = 'rgb(119,119,119)';
    }
    else {
        event.target.style.color = document.querySelector('.task-selected').style.backgroundColor;
    }
}

// Bonus
const caixaTexto = document.getElementById('task-input');
const btnAdicionar = document.getElementById('btn-add');

caixaTexto.addEventListener('keyup', checkEnterEvent);
btnAdicionar.addEventListener('click', adicionarCompromisso);

function checkEnterEvent(event) {
    if (event.type === 'keyup')
    {
        if (event.keyCode === 13) {
            event.preventDefault();
            btnAdicionar.click();
        }
    }
}

function adicionarCompromisso() {
    if (caixaTexto.value == '') {
        alert('Digite um compromisso');
    }
    else {
        criarCompromisso(caixaTexto.value);
    }
}

function criarCompromisso(compromissoName) {
    let listaCompromisso = document.querySelector('.task-list');
    let compromisso = document.createElement('li');
    
    compromisso.innerHTML = compromissoName;

    listaCompromisso.appendChild(compromisso);

    caixaTexto.value = '';
}