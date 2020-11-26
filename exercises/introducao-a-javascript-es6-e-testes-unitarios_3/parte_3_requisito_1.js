const greetPeople = (people) => {
  let greeting = 'Hello';
  let newPeople = [];

  for (const person in people) {    
    newPeople.push(`${greeting} ${people[person]}`);
  }
  return newPeople;
};

assert = require('assert');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(output, result);