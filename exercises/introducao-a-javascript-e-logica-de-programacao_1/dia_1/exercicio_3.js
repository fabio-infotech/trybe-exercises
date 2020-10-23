let a = 10;
let b = 20;
let c = 30;

if (a > b)
{
    if (a > c)     
        console.log("O maior número entre " + a + ", " + b + " e " + c + " é: " + a);
    else 
        console.log("O maior número entre " + a + ", " + b + " e " + c + " é: " + c);
}
else
{
    if (b > c) 
        console.log("O maior número entre " + a + ", " + b + " e " + c + " é: " + b);
    else 
        console.log("O maior número entre " + a + ", " + b + " e " + c + " é: " + c);
}