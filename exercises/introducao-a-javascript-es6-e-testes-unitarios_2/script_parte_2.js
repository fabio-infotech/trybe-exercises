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

// Requisito 6
const totalEstudantes = () => {
  let total = 0;
  for (let object in allLessons) {
    total += allLessons[object].numeroEstudantes;
  }
  return total;
}

console.log(totalEstudantes());

// Requisito 7
const getValueByNumber = (obj, key) => {
  const pairKeyValue = Object.entries(lesson1);
  return pairKeyValue[key][1];
}

console.log(getValueByNumber(lesson1, 0));

// Requisito 8
const verifyPair = (object, key, value) => object.hasOwnProperty(key) && object[key] === value;

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false