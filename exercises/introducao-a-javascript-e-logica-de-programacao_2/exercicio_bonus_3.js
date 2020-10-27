let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let new_numbers = [];

for(let indice = 0; indice < numbers.length; indice++)
{
    if(indice == numbers.length - 1)
    {
        new_numbers.push(numbers[indice] * 2);
    }
    else
    {
        new_numbers.push(numbers[indice] * numbers[indice + 1]);
    }
}

console.log(new_numbers);