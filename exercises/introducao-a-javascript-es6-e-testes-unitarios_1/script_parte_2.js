const num = 6;

const fatorial = (x) => { if (x <= 1) return 1; else return x * fatorial(x-1) }

console.log(`O fatorial de ${num} é ${fatorial(num)}`);