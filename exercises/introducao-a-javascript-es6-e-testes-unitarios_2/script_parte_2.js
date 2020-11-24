const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Requisito 1
const alterLesson2 = (lesson2, key, value) => lesson2[key] = value;

alterLesson2(lesson2, 'turno', 'manhã')

console.log(lesson2);

// Requisito 2
const listKeyObject = (object) => console.log(Object.keys(object));

listKeyObject(lesson1);

// Requisito 3
const lengthKeyObject = (object) => console.log(Object.keys(object).length);

lengthKeyObject(lesson1);

// Requisito 4
const listValuesObject = (object) => console.log(Object.values(object));

listValuesObject(lesson1);

// Requisito 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);
