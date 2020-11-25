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
const alterLesson2 = (object, key, value) => object[key] = value;

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
  for (let objLesson in allLessons) {
    total += allLessons[objLesson].numeroEstudantes;
  }
  return total;
}

console.log(totalEstudantes());

// Requisito 7
const getValueByNumber = (object, key) => {
  const pairKeyValue = Object.entries(object);
  return pairKeyValue[key][1];
}

console.log(getValueByNumber(lesson1, 0));

// Requisito 8
const verifyPair = (object, key, value) => object.hasOwnProperty(key) && object[key] === value;

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// Requisito Bonus 1
const totalEstudantesAssistiramAulaMatematica = (allLessonsParam, key, value) => {
  let total = 0;
  for (let objLesson in allLessonsParam) {
    if (allLessons[objLesson].hasOwnProperty(key) && allLessons[objLesson][key] === value) {
      total += allLessonsParam[objLesson].numeroEstudantes;
    }
  }
  return total;
}

console.log(totalEstudantesAssistiramAulaMatematica(allLessons, 'materia', 'Matemática'));

//Requisito Bonus 2
const createReport = (allLessonsParam, value) => {
  const report = {
    professor: '',
    aulas: [],
    numeroEstudantes: 0    
  };

  for (let objLesson in allLessonsParam) {
    if (allLessons[objLesson]['professor'] === value) {
      report.professor = allLessonsParam[objLesson].professor;
      report.aulas.push(allLessonsParam[objLesson].materia);
      report.numeroEstudantes += allLessonsParam[objLesson].numeroEstudantes;
    }
  }

  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));