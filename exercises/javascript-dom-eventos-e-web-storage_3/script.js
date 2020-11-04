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