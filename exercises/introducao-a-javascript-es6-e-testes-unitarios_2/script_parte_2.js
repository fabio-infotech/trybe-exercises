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

// Requisito 1 - Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const alterLesson2 = (object, key, value) => object[key] = value;

alterLesson2(lesson2, 'turno', 'manhã')

console.log(lesson2);

// Requisito 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeyObject = (object) => console.log(Object.keys(object));

listKeyObject(lesson1);

// Requisito 3 - Crie uma função para mostrar o tamanho de um objeto.
const lengthKeyObject = (object) => console.log(Object.keys(object).length);

lengthKeyObject(lesson1);

// Requisito 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValuesObject = (object) => console.log(Object.values(object));

listValuesObject(lesson1);

// Requisito 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.

/** Exemplo de saída
 * console.log(allLessons);
 * {
 *   lesson1:
 *   { materia: 'Matemática',
 *     numeroEstudantes: 20,
 *     professor: 'Maria Clara',
 *     turno: 'manhã' },
 *   lesson2:
 *   { materia: 'História',
 *     numeroEstudantes: 20,
 *     professor: 'Carlos',
 *     turno: 'noite' },
 *   lesson3:
 *   { materia: 'Matemática',
 *     numeroEstudantes: 10,
 *     professor: 'Maria Clara',
 *     turno: 'noite' }
 * };
 */
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Requisito 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalEstudantes = () => {
  let total = 0;
  for (let objLesson in allLessons) {
    total += allLessons[objLesson].numeroEstudantes;
  }
  return total;
}

console.log(totalEstudantes());

// Requisito 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

/** Exemplo de saída
 * console.log(getValueByNumber(lesson1, 0));
 * // Output: 'Matématica'
 */
const getValueByNumber = (object, key) => {
  const pairKeyValue = Object.entries(object);
  return pairKeyValue[key][1];
}

console.log(getValueByNumber(lesson1, 0));

// Requisito 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

/** Exemplo de saída
 * console.log(verifyPair(lesson3, 'turno', 'noite'));
 * // Output: true,
 * console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
 * // Output: false
 */
const verifyPair = (object, key, value) => object.hasOwnProperty(key) && object[key] === value;

console.log(verifyPair(lesson3, 'turno', 'noite')); // Output: true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara')); // Output: false

// Requisito Bonus 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
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

// Requisito Bonus 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5

/** Exemplo de saída
 * console.log(createReport(allLessons, 'Maria Clara'))
 * {
 *   professor: 'Maria Clara',
 *   aulas: [ 'Matemática', 'Matemática' ],
 *   estudantes: 30
 * } 
*/
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